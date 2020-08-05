<?php 
 class customer extends Model{
private $id;
private $firstName;
private $lastName;
private $contact;
private $email;
private $creationDate;
private $isActive;


		public function getid()
		{
 		return $this->id;
}

		public function getfirstName()
		{
 		return $this->firstName;
}

		public function getlastName()
		{
 		return $this->lastName;
}

		public function getcontact()
		{
 		return $this->contact;
}

		public function getemail()
		{
 		return $this->email;
}

		public function getcreationDate()
		{
 		return $this->creationDate;
}

		public function getisActive()
		{
 		return $this->isActive;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setfirstName($firstName)
		{
		  $this->firstName=$firstName;
		}

		public function setlastName($lastName)
		{
		  $this->lastName=$lastName;
		}

		public function setcontact($contact)
		{
		  $this->contact=$contact;
		}

		public function setemail($email)
		{
		  $this->email=$email;
		}

		public function setcreationDate($creationDate)
		{
		  $this->creationDate=$creationDate;
		}

		public function setisActive($isActive)
		{
		  $this->isActive=$isActive;
		}
} 
 ?>