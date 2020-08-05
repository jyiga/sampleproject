<?php
class clothitemsController extends Controller
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
		$sql = "SELECT ci.*,imf.path,cat.categoryName FROM `clothitem` ci left outer join imagefile imf on imf.itemId=ci.id inner join category cat on ci.idCat=cat.id order by ci.id ";
		$this->set('json', $this->_model->__viewSql($sql));
	}

	public function loadContent()
	{
		$this->doNotRenderHeader = 1;

		$sql = "SELECT ci.*,imf.path,cat.categoryName FROM `clothitem` ci left outer join imagefile imf on imf.itemId=ci.id inner join category cat on ci.idCat=cat.id order by ci.id ";
		$htmlTemplate = '';
		foreach ($this->_model->__resultSet($sql) as $row) {
			$htmlTemplate .= '<div class="single-products-catagory clearfix">';
			$htmlTemplate .= '<a href="shop/' . $row['id'] . '">';
			$row['path'] = str_replace('../', '', $row['path']);
			if ($row['path'] == null) {
				$htmlTemplate .= '<img src="public/img/user.png" alt="" >';
			} else {
				$htmlTemplate .= '<img src="' . $row['path'] . '" alt="" >';
			}


			$htmlTemplate .= '<div class="hover-content"><div class="line"></div>';
			$htmlTemplate .= '<p>From UGX:' . $row['cost'] . '</p>';
			$htmlTemplate .= '<p>From UGX:' . $row['itemName'] . '</p>';
			$htmlTemplate .= '</div></a></div>';
		}

		$this->set('content', $htmlTemplate);
	}
	public function edit($id)
	{
		$this->doNotRenderHeader = 1;
		$this->_model->setid($id);
		$this->_model->setitemName($_REQUEST['itemName']);
		$this->_model->setitemDescription($_REQUEST['itemDescription']);
		$this->_model->setcost($_REQUEST['cost']);
		$this->_model->setdate($_REQUEST['date']);
		//$this->_model->setisActive($_REQUEST['isActive']);
		$this->_model->setidCat($_REQUEST['idCat']);
		$this->set('json', $this->_model->__update());
	}
	public function add()
	{

		$this->doNotRenderHeader = 1;
		try {
			$this->_model->setitemName($_REQUEST['itemName']);
			$this->_model->setitemDescription($_REQUEST['itemDescription']);
			$this->_model->setcost($_REQUEST['cost']);
			$this->_model->setdate($_REQUEST['date']);
			$this->_model->setisActive(1);
			$this->_model->setidCat($_REQUEST['idCat']);
			$id = $this->_model->__saveReturnId();

			$list = array("jpg" => "image/jpg", "jpeg" => "image/jpeg", "gif" => "image/gif", "png" => "image/png");

			$path = utility::importFile('file', $list);

			$imageFile = new imagefile();
			$imageFile->setitemId($id);
			$imageFile->setpath($path);
			$imageFile->setisActive(1);
			$this->set('json', $imageFile->__save());
		} catch (Exception $ex) {
			$this->set('json', array('msg' => $ex->getMessage()));
		}
	}
	public function delete($id)
	{
		$this->doNotRenderHeader = 1;
		$this->_model->setid($id);
		$this->set('json', $this->_model->__delete());
	}
}
