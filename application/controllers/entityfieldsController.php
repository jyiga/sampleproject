<?php 
 class entityfieldsController extends Controller{

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
				   $criteria="entityId=:param0";
				   $bind=array($id);
	 	 	 	$this->set('json',$this->_model->__viewCriteria($criteria,$bind));
		}	
 	 	 public function edit($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($_REQUEST['id']);
	 	 	 	 $this->_model->setfieldName($_REQUEST['fieldName']);
	 	 	 	 $this->_model->setfieldType($_REQUEST['fieldType']);
	 	 	 	 $this->_model->setfieldLength($_REQUEST['fieldLength']);
	 	 	 	 if(isset($_REQUEST['fieldConstraint']))
				{
					$this->_model->setfieldConstraint($_REQUEST['fieldConstraint']);
				}
	 	 	 	 $this->_model->setcanBeNull($_REQUEST['canBeNull']);
	 	 	 	 $this->_model->setentityId($id);
	 	 	 	$this->set('json',$this->_model->__update()); 
 	 	}
 	 	  public function add($id)
 	 	 {
					$this->doNotRenderHeader=1;
					$this->_model->setfieldName($_REQUEST['fieldName']);
					$this->_model->setfieldType($_REQUEST['fieldType']);
					$this->_model->setfieldLength($_REQUEST['fieldLength']);
					if(isset($_REQUEST['fieldConstraint']))
					{
						$this->_model->setfieldConstraint($_REQUEST['fieldConstraint']);
					}
					
					$this->_model->setcanBeNull($_REQUEST['canBeNull']);
					$this->_model->setentityId($id);
				$this->set('json',$this->_model->__save()); 
 	 	}
 	 	 public function delete()
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($_REQUEST['id']);
	 	 	 	 $this->set('json',$this->_model->__delete()); 
		  } 
		
 	} ?>