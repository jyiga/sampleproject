<?php 
 class columncontentsController extends Controller{

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
	 	 	 	
 	 	}
 	 	  public function add($columnId,$id)
 	 	 {
				   $this->doNotRenderHeader=1;
				   if($id<=0)
				   {
					$this->_model->setcontextContent(base64_encode($_REQUEST['contextContent']));
						$this->_model->setcolumnId(htmlspecialchars($columnId));
						$this->_model->setisActive(1);
						$this->set('json',$this->_model->__save()); 
				   }else
				   {
					$this->_model->setid(htmlspecialchars($id));
					$this->_model->setcontextContent(base64_encode($_REQUEST['contextContent']));
					$this->_model->setcolumnId(htmlspecialchars($columnId));
					$this->_model->setisActive(1);
					$this->set('json',$this->_model->__update()); 

				   }
	 	 	 	
 	 	}
 	 	 public function delete($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
				$this->_model->setid($id);
				$this->set('json',$this->_model->__delete()); 
		  } 
		  public function getContent($columnId)
		  {
				$this->doNotRenderHeader=1;
				$criteria="columnId=:param0";
				$bind=array($columnId);
				$this->_model->__findCriteria($criteria,$bind);
				$array=array();
				$array['content']=base64_decode($this->_model->getcontextContent());
				if($this->_model->getid()==null || $this->_model->getid()=='')
				{
					$array['id']=0;
				}else{
					$array['id']=$this->_model->getid();
				}
				
				$this->set('json',$array); 

		  }
 	} ?>