<?php 
 class customerdeliverypointsController extends Controller{

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
	 	 	 	 $this->_model->setid(htmlspecialchars($id));
	 	 	 	 $this->_model->setcustomerId(htmlspecialchars($_REQUEST['customerId']));
	 	 	 	 $this->_model->setplaceName(htmlspecialchars($_REQUEST['placeName']));
	 	 	 	 $this->_model->setlat(htmlspecialchars($_REQUEST['lat']));
	 	 	 	 $this->_model->setlng(htmlspecialchars($_REQUEST['lng']));
	 	 	 	$this->set('json',$this->_model->__update()); 
 	 	}
 	 	  public function add()
 	 	 {
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setcustomerId(htmlspecialchars($_REQUEST['customerId']));
	 	 	 	 $this->_model->setplaceName(htmlspecialchars($_REQUEST['placeName']));
	 	 	 	 $this->_model->setlat(htmlspecialchars($_REQUEST['lat']));
	 	 	 	 $this->_model->setlng(htmlspecialchars($_REQUEST['lng']));
	 	 	 	$this->set('json',$this->_model->__save()); 
 	 	}
 	 	 public function delete($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->set('json',$this->_model->__delete()); 
 	 	} 
 	} ?>