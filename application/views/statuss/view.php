<div class='col-lg-12'>
	<table id='dgstatus' title='Manage status' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>id</th>
				<th field='statusName' width='90'>statusName</th>
				<th field='isActive' width='90'>isActive</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar'>\n\t\t<a href="#" class="btn btn-primary btn-sm" onclick="newstatus()"><i class="fa fa-plus-circle"></i>Add</a>\n\t\t<a href="#" class="btn btn-link" onclick="editstatus()"><i class="fa fa-pencil"></i>Edit</a>
        \n\t\t<a href="#" class="btn btn-link" onclick="deletestatus()"><i class="fa fa-times-circle"></i>Delete</a>\n\t</div>\n</div>