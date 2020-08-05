<?php
class itemsController extends Controller
{

	public function view()
	{
	}
	public function viewcombobox()
	{
		$this->doNotRenderHeader = 1;
		$this->set('json', $this->_model->__viewCombo());
	}
	public function viewall()
	{
		$this->doNotRenderHeader = 1;
		$this->set('json', $this->_model->__view());
	}
	public function edit($id)
	{
		$this->doNotRenderHeader = 1;
		$this->_model->setid($id);
		$this->_model->setitemName($_REQUEST['itemName']);
		$this->_model->setitemDescription($_REQUEST['itemDescription']);
		$this->_model->setamount($_REQUEST['amount']);
		$this->_model->setuom($_REQUEST['uom']);
		//$this->_model->setcreationDate($_REQUEST['creationDate']);
		//$this->_model->setModifiedDate($_REQUEST['ModifiedDate']);
		$this->_model->setisActive(1);
		$this->set('json', $this->_model->__update());
	}
	public function add()
	{
		$this->doNotRenderHeader = 1;
		try{

			$id=$_REQUEST['id'];
			$this->_model->setid($_REQUEST['id']);
			$this->_model->setitemName($_REQUEST['itemName']);
			$this->_model->setitemDescription($_REQUEST['itemDescription']);
			$this->_model->setamount($_REQUEST['amount']);
			$this->_model->setuom($_REQUEST['uom']);
			//$this->_model->setcreationDate($_REQUEST['creationDate']);
			//$this->_model->setModifiedDate($_REQUEST['ModifiedDate']);
			$this->_model->setcategoryId($_REQUEST['categoryId']);
			$this->_model->setisActive(1) ;
			$this->_model->__save();

			$list=array("jpg" => "image/jpg", "jpeg" => "image/jpeg", "gif" => "image/gif", "png" => "image/png");
			$countfiles = $_REQUEST['fileCount'];
			for($i=0;$i<$countfiles;$i++){
				$path=utility::importFile('file'.$i,$list);
				$imageFile = new imagefile();
				$imageFile->setitemId($id);
				$imageFile->setpath($path['path']);
				$imageFile->setisActive(1);
				$imageFile->__save();
			}
			$this->set('json',"Successfull Save,".$id);

		}catch(Exception $exception)
		{
			$this->set('json',"Error:".$exception->getMessage());
		}
		//$this->set('json', $this->_model->__save());
	}
	public function delete($id)
	{
		$this->doNotRenderHeader = 1;
		$this->_model->setid($id);
		$this->set('json', $this->_model->__delete());
	}

	public function viewItemImages()
	{
		$this->doNotRenderHeader = 1;
		$sql = 'SELECT item.id, item.itemName, GROUP_CONCAT(itemimage.filename) as images FROM item inner join itemimage on item.id = itemimage.id GROUP BY item.id';
		$this->set('json', $this->_model->__resultset($sql));
	}
	public function getTransactionId()
	{
		$this->doNotRenderHeader = 1;
		$this->set('json', ($this->_model-> _count()+1));
	}
}
