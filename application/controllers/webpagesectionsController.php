<?php 
 class webpagesectionsController extends Controller{

 	 	 public function view()
 	 	{
	 	}	
 	 	public function viewcombobox($id)
 	 	 {
				$this->doNotRenderHeader=1;
				$sql="pgeId=:param0";
				$bind=array($id);
				$this->set('json',$this->_model->__viewComboCriteria($sql,$bind));
	 	}	
 	 	 public function viewall()
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	$this->set('json',$this->_model->__view());
		}	
 	 	 public function edit()
 	 	{
				//$this->doNotRenderHeader=1;
				/*$this->_model->setid(htmlspecialchars($id));
				$this->_model->setsectionName(htmlspecialchars($_REQUEST['sectionName']));
				$this->_model->setpositionIndex(htmlspecialchars($_REQUEST['positionIndex']));
				$this->_model->setcolumnNo(htmlspecialchars($_REQUEST['columnNo']));
				$this->_model->setpgeId(htmlspecialchars($_REQUEST['pgeId']));
				$this->set('json',$this->_model->__update()); */

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
					if($fieldNm=="Section Name")
					{
						$this->_model->setsectionName(htmlspecialchars($val));
					}else if($fieldNm=="Column")
					{
						//$this->_model->setcolumnCls(htmlspecialchars($val));
					}else if($fieldNm=="Class")
					{
						$this->_model->setclsSection(htmlspecialchars($val));
					}
					

				}
				
				$this->set('json',$this->_model->__update());
 	 	}
 	 	  public function add($id)
 		 {
			  $result=array();
				$this->doNotRenderHeader=1;
				$this->_model->setsectionName(htmlspecialchars($_REQUEST['sectionName']));
				$this->_model->setpositionIndex(htmlspecialchars($_REQUEST['positionIndex']));
				$this->_model->setcolumnNo(htmlspecialchars($_REQUEST['columnNo']));
				$this->_model->setpgeId(htmlspecialchars($id));
				$sectionId=$this->_model->__saveReturnId(); 

				//generate the columns 
				for($i=0;$i<$this->_model->getcolumnNo();$i++)
				{
					$colNum='col'.($i+1);
					$cls=12/$this->_model->getcolumnNo();
					$columnCls='col-lg-'.$cls;

					$sectionColumn = new sectioncolumn();
					$sectionColumn->setsectionId($sectionId);
					$sectionColumn->setcolumnNm($colNum);
					$sectionColumn->setcolumnCls($columnCls);
					$sectionColumn->__save();

				}

				$this->set('json',array('success'=>true)); 

				
				
				//$sectionColumn->setcolumnNm()



				   

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
				$sql="Select * from webpagesection where id=:param0";
				$bind=array($pgeId);
				foreach($this->_model->__resultSetBind($sql,$bind) as $row)
				{
					$i=$i+1;
					$array=array();
					$array['id']=$row['id'];
					$array['name']='Section Name';
					$array['value']=$row['sectionName'];
					$array['group']='Section Setting';
					$array['editor']='text';
					array_push($data,$array);
					$array=array();
					$array['id']=$row['id'];
					$array['name']='Column';
					$array['value']=$row['columnNo'];
					$array['group']='Section Setting';
					$array['editor']='text';
					array_push($data,$array);
					$array=array();
					$array['id']=$row['id'];
					$array['name']='Class';
					$array['id']=$row['id'];
					$array['value']=$row['clsSection'];
					$array['group']='Section Setting';
					$array['editor']='text';
					array_push($data,$array);
					
				}
				if($i==0)
				{
					$array=array();
					$array['id']=0;
					$array['name']='Section Name';
					$array['value']="";
					$array['group']='Section Setting';
					$array['editor']='text';
					array_push($data,$array);
					$array=array();
					$array['id']=0;
					$array['name']='Column';
					$array['value']="";
					$array['group']='Section Setting';
					$array['editor']='numberbox';
					array_push($data,$array);
					$array=array();
					$array['id']=0;
					$array['name']='Class';
					$array['value']="";
					$array['group']='Section Setting';
					$array['editor']='text';
					array_push($data,$array);
				}
				$this->set('json',$data); 

				
		  }
 	} ?>