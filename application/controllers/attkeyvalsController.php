<?php 
 class attkeyvalsController extends Controller{

 	 	 public function view()
 	 	{
	 	}	
 	 	public function viewcombobox()
 	 	 {
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	$this->set('json',$this->_model->__viewCombo());
	 	}	
 	 	 public function viewall($id=0)
 	 	{
				$this->doNotRenderHeader=1;
				$bind=null;
				$sql ="Select akv.*,ak.attName from attkeyval akv inner join attkey ak on akv.attKeyId=ak.id where akv.guiToolId=:param0";
				if($id!=0)
				{
					//$id=$_REQUEST['id'];
					$bind=array($id);
					$sql ="Select akv.*,ak.attName from attkeyval akv inner join attkey ak on akv.attKeyId=ak.id where akv.guiToolId=:param0";
				}else
				{
					$sql ="Select akv.*,ak.attName from attkeyval akv inner join attkey ak on akv.attKeyId=ak.id";
				}
	 	 	 	$this->set('json',$this->_model->__viewSql($sql,$bind));
		}	
 	 	 public function edit($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
				$this->_model->setid($_REQUEST['id']);
				$this->_model->setguiToolId($id);
				//$this->_model->setattKeyId($_REQUEST['attKeyId']);
				$this->_model->setattVal($_REQUEST['attVal']);
	 	 	 	$this->set('json',$this->_model->__update()); 
 	 	}
 	 	  public function add($id)
 	 	 {
				   $this->doNotRenderHeader=1;
				   //header('Content-Type: text/plain');
				   //$row=utf8_encode($_POST['row']);
				   $data = json_decode(file_get_contents("php://input"));
					foreach($data->row as $obj)
					{
						$attId=-1;
						$attId=$obj->id;
						$criteria="guiToolId='".$id."' and attKeyId='".$attId."'";
						$this->_model->setguiToolId($id);
						$this->_model->setattKeyId($attId);
						$this->_model-> __saveUnquie($criteria);

					}
	 	 	 	 //$this->_model->setguiToolId($id);
	 	 	 	 //$this->_model->setattKeyId($_REQUEST['attKeyId']);
					//$this->_model->setattVal($_REQUEST['attVal']);
					//$this->_model->__save()
	 	 	 	$this->set('json',array('success'=>true)); 
 	 	}
 	 	 public function delete($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($_REQUEST['id']);
	 	 	 	 $this->set('json',$this->_model->__delete()); 
 	 	} 
 	} ?>