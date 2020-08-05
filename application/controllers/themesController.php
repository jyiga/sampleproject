<?php 
 class themesController extends Controller{

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
	 	 	 	 $this->_model->setthemeName($_REQUEST['themeName']);
	 	 	 	 $this->_model->setisDefault($_REQUEST['isDefault']);
	 	 	 	$this->set('json',$this->_model->__update()); 
 	 	}
 	 	  public function add()
 	 	 {
					ini_set('max_execution_time', 300); 
				   $this->doNotRenderHeader=1;
				   try{
					$this->_model->setthemeName($_REQUEST['themeName']);
					$this->_model->setisDefault($_REQUEST['isDefault']);
					$id=$this->_model->__saveReturnId();
	
					$list=array('jpg' => 'image/jpg', 'jpeg' => 'image/jpeg', 'gif' => 'image/gif', 'png' => 'image/png','css'=>'text/css','js'=>'text/javascript');
					$uploadPath="../public/theme/".htmlspecialchars($_REQUEST['fileType'])."/";
					$path=utility::importFile('file',$list,$uploadPath);
	
					$themeFile=new themefile();
					$themeFile->setfile($path['path']);
					$themeFile->setfileType(htmlspecialchars($_REQUEST['fileType']));
					$themeFile->setextractable(htmlspecialchars($_REQUEST['extractable']));
					$themeFile->setthemeId($id);
					$themeFile->__save();

					if($themeFile->getextractable()==1 && $themeFile->getfileType()=='css')
					{
						try{
							$fileptr=fopen($path['path'],"r");
							while(!feof($fileptr))
							{
								//$str=fgetc($fileptr);
								$strLine=fgets($fileptr);
								if(strpos($strLine,"{")!==false)
									{
										$strArray=explode(' ',$strLine);
										for($i=0;$i<sizeof($strArray);$i++)
										{
											$str=$strArray[$i];
											$identityStr=substr($str,1,(strlen($str)-1));
										if(substr($str,0,1)=="#")
										{
											$themeStyle=new themeStyle();
											$themeStyle->setattName($identityStr);
											$themeStyle->setattType('id');
											$themeStyle->setthemeId($id);
											$themeStyle->__save();
											
		
										}else if(substr($str,0,1)===".")
										{
											$themeStyle=new themeStyle();
											$themeStyle->setattName($identityStr);
											$themeStyle->setattType('class');
											$themeStyle->setthemeId($id);
											$themeStyle->__save();
										}
		
		
										}
									}
								
															
							}
							$this->set('json',array('success'=>true)); 
							fclose($fileptr);
						}catch(Exception $exception)
						{
							$this->set('json',array('message'=>$exception->getMessage())); 
						}
						
						
					}
					   //$this->set('json',$themeFile->__save()); 

				   }catch(Exception $ex)
				   {
					$this->set('json',array('message'=>$ex->getMessage())); 
				   }
				
 	 	}
 	 	 public function delete($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->set('json',$this->_model->__delete()); 
 	 	} 
 	} ?>