 <!-- /NAVIGATION -->
 <div class="contact_form">
 	<div class='container'>
	 <div class="col-lg-10 offset-lg-1">
					<div class="contact_form_container">
						<div class="contact_form_title">Already have an account ? <a href="#">Login</a></div>
				<form id="account" class="clearfix" method="post" action='../signup/0'>

						<div class="row">
									<div class="col-lg-12">
										<div class="contact_form_title">
											<h3>User account  Details</h3>
										</div>
									</div>
									<div class="col-lg-6">
									
										<div class="form-group">
										<label>First Name</label>
											<input class="form-control" type="text" name="firstName" placeholder="First Name" required>
										</div>
										<div class="form-group">
										<label>Mobile Number</label>
											<input class="form-control" type="tel" name="tel" placeholder="Mobile Number">
										</div>
										<div class="form-group">
										<label>Password</label>
											<input class="form-control" type="password" name="password" placeholder="Password"   required>
										</div>
										<div class="form-group">
										<label>Confirm Password</label>
											<input class="form-control" type="cpassword" name="cpassword" placeholder="Confirm Password"  required>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group">
										<label>Last Name</label>
											<input class="form-control" type="text" name="lastName" placeholder="Last Name" required>
										</div>
										<div class="form-group">
										<label>Email</label>
											<input class="form-control" type="text" name="email" placeholder="Email"  required>
										</div>
										
										<div class='form-group'>
											<label>Here As?</label>
											<select id='userTypeId' name='userTypeId' class='easyui-combobox form-control' style='height:38px; width:100%;'  data-options="url:'../../userTypes/viewcombobox',valueField:'id',textField:'userTypeName',panelWidth:'450',panelHeight:'auto'" ></select>
										</div>
									</div>
									<div class="col-lg-12">
										<div class="form-action">
										<input class="btn btn-success" type="submit"  value="signup">&nbsp;&nbsp;<input class="btn btn-danger" type="reset"  value="Cancel">
										</div>
									</div>

							
						</div>
					</form> 
				</div>
			</div>
	</div>


</div>

