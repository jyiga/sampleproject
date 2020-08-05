<?php 
 class membersController extends Controller{

 	 	 public function view()
 	 	{
		 }	
		 
		 public function activate($secertCode=null)
		 {
			 $matchNo=0;
			 $html=null;
			 if(!empty($secertCode))
			 {
				 $secertCode=htmlspecialchars(trim($secertCode));
				 $verifyCode=new verifycode();
				 $critera='code="'.$secertCode.'" and isActive=0';
				 $matchNo=$verifyCode->_countDefined($critera);
				 if($matchNo==0)
				 {
					header('location:../../');
				 }else{
					 if($matchNo==1)
					 {
						 //update. contain 
						 $verifyCode->__findCriteria($critera);
						 $verifyCode->setisActive(1);
						 $verifyCode->__update();
						 $html="<h4>Activation Done !</h4><p>You have successfull, activated you account. Click on the click below to contuine.</p><a href='../../cpanel/login' class='btn btn-primary'>login<a>";
					 }else{
						header('location:../../');
					 }

				 }





			 }else{
				header('location:../../');
			 }
			 $this->set('content',$html);
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
	 	 	 	$this->set('json',$this->_model->__update()); 
 	 	}
 	 	  public function add()
 	 	 {
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	$this->set('json',$this->_model->__save()); 
 	 	}
 	 	 public function delete($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->set('json',$this->_model->__delete()); 
 	 	} 
 	} ?>