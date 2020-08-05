<?php 
 class webpagesController extends Controller{

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
				   $sql="select id,namepge,orderIndex,showPge,parentId,parentId _parentId from webpage order by  orderIndex ";
	 	 	 	$this->set('json',$this->_model->__viewSql($sql));
		}	
 	 	 public function edit($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid(htmlspecialchars($id));
	 	 	 	 $this->_model->setnamepge(htmlspecialchars($_REQUEST['namepge']));
				if($_REQUEST['parentId']!="" && !is_null($_REQUEST['parentId'])){
					$this->_model->setparentId(htmlspecialchars($_REQUEST['parentId']));
				}
	 	 	 	 $this->_model->setorderIndex(htmlspecialchars($_REQUEST['orderIndex']));
	 	 	 	 $this->_model->setshowPge(htmlspecialchars($_REQUEST['showPge']));
	 	 	 	$this->set('json',$this->_model->__update()); 
 	 	}
 	 	  public function add()
 	 	 {
	 	 	 	$this->doNotRenderHeader=1;
				$this->_model->setnamepge(htmlspecialchars($_REQUEST['namepge']));
				if($_REQUEST['parentId']!="" && !is_null( $_REQUEST['parentId']) )
				{
					$this->_model->setparentId(htmlspecialchars($_REQUEST['parentId']));
				}
						$this->_model->setorderIndex(htmlspecialchars($_REQUEST['orderIndex']));
						$this->_model->setshowPge(htmlspecialchars($_REQUEST['showPge']));
					$this->set('json',$this->_model->__save()); 
 	 	}
 	 	 public function delete($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->set('json',$this->_model->__delete()); 
		  }
		  
		  public function getCount()
		  {
			$this->doNotRenderHeader=1;
			$this->set('json',$this->_model->_count()+1);
		  }
 	} ?>