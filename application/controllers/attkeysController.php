<?php 
 class attkeysController extends Controller{

 	 	 public function view()
 	 	{
	 	}	
 	 	public function viewcombobox()
 	 	 {
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	$this->set('json',$this->_model->__viewCombo());
	 	}	
 	 	 public function viewall()
 	 	{
				$this->doNotRenderHeader=1;
				 $sql="";
				 $bind=null;
				 if(isset($_REQUEST['id'])) 
				 {
					 $id=$_REQUEST['id'];
					 $bind=array($id);
					 $sql="Select * from attkey where id not in (Select atk.attKeyId from attkeyval atk where atk.guiToolId=:param0)";

				 } else
				 {
					$sql="Select * from attkey";
				 }
	 	 	 	$this->set('json',$this->_model->__viewSql($sql,$bind));
		}	
 	 	 public function edit($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->_model->setattName($_REQUEST['attName']);
	 	 	 	$this->set('json',$this->_model->__update()); 
 	 	}
 	 	  public function add()
 	 	 {
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setattName($_REQUEST['attName']);
	 	 	 	$this->set('json',$this->_model->__save()); 
 	 	}
 	 	 public function delete($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->set('json',$this->_model->__delete()); 
 	 	} 
 	} ?>