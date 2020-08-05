<?php 
 class pagesController extends Controller{

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
		  
		  public function signup($id=0){
			//$this->doNotRenderHeader=1;
			$html="";
			$errorMessage=array();
			$user=new user();
			$user->setid(utility::getGUID2());
			if(isset($_POST['firstName']) && !empty($_POST['firstName']))
			{
				$firstName=htmlspecialchars(trim($_POST['firstName']));
				if(strlen($firstName)<=50)
				{
				   $user->setfirstName($firstName);
				}else{
				   
				   $errorMessage[]="Your first Name is longer than the allow length 50 abelow";

				}
			}else{
				   $errorMessage[]="Please the first name";
			}

			if(isset($_POST['lastName']) && !empty($_POST['lastName']))
			{
				$lastName=htmlspecialchars(trim($_POST['lastName']));
				if(strlen($lastName)<=50)
				{
				   $user->setlastName($lastName);
				}else{
				   
				   $errorMessage[]="Your last Name is longer than the allow length 50 abelow";

				}
			}else{
				   $errorMessage[]="Please supply your last Name  ";
			}

			if(isset($_POST['email'])&& !empty($_POST['email']))
			{
				$email=htmlspecialchars(trim($_POST['email']));
				if(strlen($email)<=50)
				{
				   $user->setemail($email);
				   $emailCriteria="email='".$email."'";
				   $countExistance=0;
				   $countExistance=$user->_countDefined($emailCriteria);
				   if($countExistance>0)
				   {
					   $errorMessage[]="User account already exists, Just click on login.";
				   }

				}else{
				   
				   $errorMessage[]="Your email is longer than the allow length 50 abelow";

				}
			}else{
				   $errorMessage[]="Please supply your email";
			}

			if(isset($_POST['tel']) && !empty($_POST['tel']))
			{
				$tel=htmlspecialchars(trim($_POST['tel']));
				if(strlen($tel)<=50)
				{
				   $user->setmobileNumber($tel);
				}else{
				   
				   $errorMessage[]="Your mobile number is longer than the allow length 50 abelow";

				}
			}else{
				   $errorMessage[]="Please supply your mobile number ";
			}

			

			$html="";

			if(sizeof($errorMessage)==0)
			{
				$id=-1;
				$statu=new statu();
				$criteria='statusName="verify"';
				$statu->__findCriteria($criteria);
				$user->setstatusId($statu->getid());
				$user->__save();
				$id=$user->getid();

				if($id!=-1)
				{
					$userofType=new useroftype();
					$userofType->setuserId($id);

					if(isset($_POST['userTypeId']) && !empty($_POST['userTypeId']))
				   {
					   $userTypeId=htmlspecialchars(trim($_POST['userTypeId']));
					   $userofType->setuserTypeId($userTypeId);
					   $userofType->setisActive(1);
					   $userofType->__save();
					   //
					   $verifyCode=new verifycode();
					   $verifyCode->generateCode($id);

					   $systemUser=new systemUser();
					   $systemUser->setid($id);
					   $systemUser->setfirstName($user->getfirstName());
					   $systemUser->setlastName($user->getlastName());
					   $systemUser->setcontact($user->getmobileNumber());
					   $systemUser->setusername($user->getemail());
					   $systemUser->setemail($user->getemail());
					   $systemUser->setpassword($_REQUEST['password']);
					   $systemUser->setisActive(1);
					   $systemUser->__save();


					   $builder=new htmlMailBuilder();
					   $htmlHeader='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">';
					   $htmlHeader.='<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';
					   $htmlHeader.='<meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge">';
					   $htmlHeader.='<title></title><style type="text/css"></style><body style="margin:0; padding:20; background-color:#F2F2F2;"> <center>';
					   $htmlHeader.='<table width="100%" border="0" cellpadding="5" cellspacing="0" bgcolor="#F2F2F2">';
					   $htmlHeader.='<tr><td valign="top" style="padding:14px;">';
					   $htmlMsg='<h2>Activate your account</h2><p>Hey '.$user->getfirstName(). ' ' .$user->getlastName().', please click the link to activate you account</p><br>';
					   $htmlMsg.='<p></p>';
					   $htmlMsg.='<p><a href="http://localhost:9000/realityhouse/members/activate/'.$verifyCode->getcode().'">Click Here</a><p>';
					   $htmlfooter='</td></tr></table></center></body></html>';

					   $builder->setHtmlHeader($htmlHeader);
					   $builder->setHtmlBody($htmlMsg);
					   $builder->setHtmlfooter($htmlfooter);

					   $mail = new phpmailer();
					   $mail->IsSMTP();
					   $mail->From     = "info@code360ds.com";
					   $mail->FromName = "Reality House";
					   $mail->Host     = "p3plcpnl0579.prod.phx3.secureserver.net";
					   $mail->Mailer   = "smtp";
					   $mail->Username="info@code360ds.com";
					   $mail->Password="&Hajara1320";
					   $mail->Port=465;
					   $mail->SMTPSecure='ssl';
					   $mail->SMTPAuth=true;
					   $mail->Subject ="Activate Account";
					   $mail->isHTML(true);


					   $status=mailDirector::buildMail($builder,$mail,$user->getemail());

					   //mail
					   if($status)
					   {
						   $html.="<p>Check you email for the activation link. Send link</p>";
					   }else{
						   $html.="<p>Failed</p>";
					   }
					   



				   }else{
						   //$errorMessage[]="Please supply your mobile number ";
						   $html.="<ul>";
						   $html.='<li>Select you here as? </li>';
						   $html.="</ul>";
				   }
					

				}else{
				   $html.="<ul>";
				   $html.='<li>Error submitting information to server </li>';
				   $html.="</ul>";
				}

			}else{

			   $html.="<ul>";
			   for($i=0; $i<sizeof($errorMessage);$i++)
			   {
				   $html.='<li>'.$errorMessage[$i].'</li>';

			   }
			   $html.="</ul>";

			}

			$this->set('content',$html);
		  }
 	} ?>