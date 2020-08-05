<?php 
 class orderitemsController extends Controller{

 	 	 public function view()
 	 	{
	 	}	
 	 	public function viewcombobox()
 	 	 {
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	$this->set('json',$this->_model->__viewCombo());
	 	}	
 	 	 public function viewall($id)
 	 	{
				$this->doNotRenderHeader=1;
				$this->_model->setorderId(htmlspecialchars($id));
				   
	 	 	 	$this->set('json',$this->_model->orderTable());
		}	
 	 	 public function edit($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid(htmlspecialchars($id));
	 	 	 	 $this->_model->setorderId(htmlspecialchars($_REQUEST['orderId']));
	 	 	 	 $this->_model->setitemId(htmlspecialchars($_REQUEST['itemId']));
	 	 	 	 $this->_model->setqty(htmlspecialchars($_REQUEST['qty']));
	 	 	 	$this->set('json',$this->_model->__update()); 
 	 	}
 	 	  public function add()
 	 	 {
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setorderId(htmlspecialchars($_REQUEST['orderId']));
	 	 	 	 $this->_model->setitemId(htmlspecialchars($_REQUEST['itemId']));
	 	 	 	 $this->_model->setqty(htmlspecialchars($_REQUEST['qty']));
	 	 	 	$this->set('json',$this->_model->__save()); 
 	 	}
 	 	 public function delete($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->set('json',$this->_model->__delete()); 
 	 	} 
 	} ?>