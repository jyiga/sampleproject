<?php 
 class listhandlesController extends Controller{

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
	 	 	 	$this->set('json',$this->_model->__view());
		}	
 	 	 public function edit($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->_model->setidVal($_REQUEST['idVal']);
	 	 	 	 $this->_model->settextVal($_REQUEST['textVal']);
	 	 	 	 $this->_model->setlistName($_REQUEST['listName']);
	 	 	 	$this->set('json',$this->_model->__update()); 
 	 	}
 	 	  public function add()
 	 	 {
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setidVal($_REQUEST['idVal']);
	 	 	 	 $this->_model->settextVal($_REQUEST['textVal']);
	 	 	 	 $this->_model->setlistName($_REQUEST['listName']);
	 	 	 	$this->set('json',$this->_model->__save()); 
 	 	}
 	 	 public function delete($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->set('json',$this->_model->__delete()); 
		  } 
		  public function getList($listName)
		  {
			$this->doNotRenderHeader=1;
			$list=htmlspecialchars($listName);
			$criteria="listName ='".$list."'";
			$this->set('json',$this->_model->__viewComboCriteria($criteria));

		  }
 	} ?>