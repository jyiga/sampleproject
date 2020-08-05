
<div class='col-lg-12'>
	<table id='dgservicetype' title='Manage servicetype' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>id</th>
				<th field='serviceName' width='90'>Service</th>
				<th field='startTime' width='90'>Start Time</th>
				<th field='endTime' width='90'>End Time</th>
				<!--<th field='isActive' width='90'>isActive</th>-->
			</tr>
		</thead>
	</table>
	<div id='toolbar'><a href="#" class="btn btn-primary btn-sm" onclick="newservicetype()"><i class="fa fa-plus-circle"></i>Add</a><a href="#" class="btn btn-link" onclick="editservicetype()"><i class="fa fa-pencil"></i>Edit</a>
        <a href="#" class="btn btn-link" onclick="deleteservicetype()"><i class="fa fa-times-circle"></i>Delete</a></div></div>