
<div class='col-lg-12'>
	<table id='dgsizetype' title='Manage sizetype' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>id</th>
				<th field='sizeName' width='90'>size Name</th>
				<th field='isActive' width='90'>Is Active</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar'><a href="#" class="btn btn-primary btn-sm" onclick="newsizetype()"><i class="fa fa-plus-circle"></i>Add</a><a href="#" class="btn btn-link" onclick="editsizetype()"><i class="fa fa-pencil"></i>Edit</a>
       <a href="#" class="btn btn-link" onclick="deletesizetype()"><i class="fa fa-times-circle"></i>Delete</a></div></div>