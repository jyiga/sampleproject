<?php 
 class sectioncolumnsController extends Controller{

 	 	 public function view()
 	 	{
	 	}	
 	 	public function viewcombobox($id)
 	 	 {
				$this->doNotRenderHeader=1;
				$sql="sectionId=:param0";
	 	 	 	$bind=array($id);
				$this->set('json',$this->_model->__viewComboCriteria($sql,$bind));
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
	 	 	 	 $this->_model->setcolumnNm(htmlspecialchars($_REQUEST['columnNm']));
	 	 	 	 $this->_model->setsectionId(htmlspecialchars($_REQUEST['sectionId']));
	 	 	 	$this->set('json',$this->_model->__update()); 
 	 	}
 	 	  public function add()
 	 	 {
				$this->doNotRenderHeader=1;
				$content=explode(',',$_REQUEST['content']);
				// $size=''.$_REQUEST['content']."<br>";
				// $size.=" Content:".sizeof($content);
				for($i=0;$i<sizeof($content);$i++)
				{
					$contentStr=explode(':',$content[$i]);
					//$size.=" ContentStr:".sizeof($contentStr);
					$id=$contentStr[0];
					$fieldNm=$contentStr[1];
					$val=$contentStr[2];
					$this->_model->setid($id);
					if($fieldNm=="Column Name")
					{
						$this->_model->setcolumnNm(htmlspecialchars($val));
					}else if($fieldNm=="Class")
					{
						$this->_model->setcolumnCls(htmlspecialchars($val));
					}
					

				}
				
				$this->set('json',$this->_model->__update());
 	 	}
 	 	 public function delete($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->set('json',$this->_model->__delete()); 
		}
		
		public function getPropertgridView($pgeId)
		  {
				$this->doNotRenderHeader=1;
				$i=0;
				$data=array();
				$sql="Select * from sectioncolumn where id=:param0";
				$bind=array($pgeId);
				foreach($this->_model->__resultSetBind($sql,$bind) as $row)
				{
					$i=$i+1;
					
					$array=array();
					$array['id']=$row['id'];
					$array['name']='Column Name';
					$array['value']=$row['columnNm'];
					$array['group']='Column Setting';
					$array['editor']='text';
					array_push($data,$array);
					$array=array();
					$array['id']=$row['id'];
					$array['name']='Class';
					$array['value']=$row['columnCls'];
					$array['group']='Column Setting';
					$array['editor']='text';
					array_push($data,$array);
					
				}
				if($i==0)
				{
					$array=array();
					$array['id']=0;
					$array['name']='Column Name';
					$array['value']="";
					$array['group']='Column Setting';
					$array['editor']='text';
					array_push($data,$array);
					$array=array();
					$array['id']=0;
					$array['name']='Class';
					$array['value']="";
					$array['group']='Column Setting';
					$array['editor']='text';
					array_push($data,$array);
				}
				$this->set('json',$data); 

				
		  }
		  
 	} ?>