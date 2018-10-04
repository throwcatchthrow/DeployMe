// Deploy Me

// File Sections

// 1. Getting Data For / Creating Dropdowns
// 2. Getting Data For / Creating Checkboxes
// 3. Getting User Data for entire Form 
// 4. Setting Up form (and supply data if UID is provided in URL)
// 5. Language Table Row Creation/Deletion
// 6. Form Submit Button



// Option Utility for clearing and resetting fields values
function setOption(selectbox, data, append_other){
	selectbox.empty();	

	selectbox.append('<option value="" selected disabled hidden>Select One</option>')
	for (var key in data){
	    selectbox.append('<option>'+data[key]+'</option>');
	}

	if (append_other != false) {
		selectbox.append('<option>Other</option>');
	}
}

function setCheckBox(container, data, name){
	container.empty();	
	for (var key in data){
	    container.append('<div class="custom-control custom-checkbox">' + 
	    				 '<input type="checkbox" class="text-wrap custom-control-input" value="' + data[key] + '"  name="' + name + '" id="check_' + key + '">' +
						 '<label class="custom-control-label" style="font-weight:normal" for="check_' + key + '">' + data[key] + '</label>' +
						 '</div>');
	}
}

// Dropdown Server Calls

function getLanguages(){
	// This actually needs to do the proper web server call to pull this from the database
	
	return {1:'English',2:'Spanish',3:'French',4:'German'};	
}

function getProficiencies(){
	// This actually needs to do the proper web server call to pull this from the database

	return {1:'Advanced',2:'Intermediate',3:'Beginner'};
}

function getAgencies(){
	// This actually needs to do the proper web server call to pull this from the database
	return {1:'Agency for Children and Families (ACF)',
			2:'Administration for Community Living (ACL)',
			3:'Agency for Healthcare Research and Quality (AHRQ)',
			4:'Agency for Toxic Substances and Disease Registry (ATSDR)',
			5:'Centers for Disease Control and Prevention (CDC)',
			6:'Centers for Medicare & Medicaid Services (CMS)',
			7:'Food and Drug Administration (FDA)',
			8:'Health Resources and Services Administration (HRSA)',
			9:'Indian Health Service (IHS)',
			10:'National Institute of Health (NIH)'};

}

function getEmployeeTypes(){
	// This actually needs to do the proper web server call to pull this from the database
	return {1:'FTE',
			2:'Contractor',
			3:'ORISE'};

}
function getJobSeries(){
	// This actually needs to do the proper web server call to pull this from the database
	return {1:'Series 1',
			2:'Series 2',
			3:'Series 3'};
}

// Dropdown Setters

function setLanguage(){
	$('select[name^="select_language"]').each(function(){
		setOption($(this),getLanguages(),false);
	});
}
function setProficiency(){
	$('select[name^="select_proficiency"]').each(function(){
		setOption($(this),getProficiencies(),false);
	});
}



function setDropdowns(){

	//setLanguage();
	setOption($('#agency'),getAgencies(),true);
	setOption($('#job_series'),getJobSeries(),true);
	setOption($('#employee_type'),getEmployeeTypes(),true);
	setLanguage();
	setProficiency();
}


// Gets checkboxes

function getCommunication(){
	// This actually needs to do the proper web server call to pull this from the database

	return {1:'Writing, editing, or creating content (including using plain language)',
			2:'Media and public relations (i.e., press officer, writing talking points, preparation spokesperson)',
			3:'Developing social media content and strategy',
			4:'Developing and managing websites and online content',
			5:'Health education and community outreach (creating and organizing campaigns, presenting at health fairs, communicating with schools, churches, and shelters, etc.)',
			6:'Media monitoring and message testing',
			7:'Strategic communication planning (drafting communication plans)'};
	

}

function getPartnership(){
	// This actually needs to do the proper web server call to pull this from the database
	return {1:'State, local, territorial, or tribal health departments',
			2:'Clinicians and other public health organizations',
			3:'Non-governmental organizations',
			4:'FEMA and other federal government organizations',
			5:'International health organizations',
			6:'Private sector organizations'}

}

function getExperience() {
	// This actually needs to do the proper web server call to pull this from the database
	return {1:'I have worked on an emergency response within my agency.',
			2:'I have deployed to the field on an emergency response.',
			3:'I have worked in a Joint Information Center (at agency headquarters or in the field)'}

}

function getTraining(){
	// This actually needs to do the proper web server call to pull this from the database
	return {1:'IS-100.C: Introduction to the Incident Command System, ICS 100',
			2:'IS-200.B: ICS for Single Resources and Initial Action Incidents',
			3:'IS-700.B: An Introduction to the National Incident Management System',
			4:'IS-800.C: National Response Framework, an Introduction',
			5:'Crisis and Emergency Risk Communication (CERC): Basic',
			6:'Crisis and Emergency Risk Communication (CERC): Advanced',
			7:'FEMA IS-242.B: Effective Communication'}

}

function getExpertise(){
	// This actually needs to do the proper web server call to pull this from the database
	return {1:'Pandemic Influenza or other infectious disease outbreak',
			2:'Natural Disasters and Severe Weather',
			3:'Biological Incident',
			4:'Chemical Emergencies ',
			5:'Nuclear/Radiation Incident',
			6:'Cyber Incident',
			7:'Other'}

}

function setCheckboxes(){
	setCheckBox($('#communication_container'),getCommunication(),"communication");
	setCheckBox($('#partnership_container'),getPartnership(),"partnership");
	setCheckBox($('#experience_container'),getExperience(),"experience");
	setCheckBox($('#training_container'),getTraining(),"training");
	setCheckBox($('#expertise_container'),getExpertise(),"expertise");
}



// User Data Server Calls
function getUserBasic(uid){
	// This actually needs to do the proper web server call to pull this from the database

	// User Data Array is in format [Fist Name, Last Name, Phone, Email, office, agency_id, job_sries_id, employee type id]
	var data = [];

	// Used for example data. REMOVE BEFORE PRODUCTION
	if (uid == 1){
		data = ['Liz','Wilson','(555) 555-5555','user@email.com','Generic Office Name','Administration for Community Living (ACL)','Series 1','ORISE'];
	}

	return data;
}

function getUserCommunication(uid){
	// This actually needs to do the proper web server call to pull this from the database
	var data = [];

	if (uid==1){
		data = ['Writing, editing, or creating content (including using plain language)',
			  'Strategic communication planning (drafting communication plans)'];
	}

	return data;
}

function getUserPartnershipSkills(uid){
	// This actually needs to do the proper web server call to pull this from the database
	var data = [];

	if (uid==1){
		data =  ['State, local, territorial, or tribal health departments'];
	}

	return data;
}

function getUserExperience(uid) {
	// This actually needs to do the proper web server call to pull this from the database
	var data = [];

	if (uid==1){
		data = ['I have worked in a Joint Information Center (at agency headquarters or in the field)'];
	}

	return data;
}

function getUserTraining(uid){
	// This actually needs to do the proper web server call to pull this from the database
	var data = [];

	if (uid==1){
		data = [];
	}

	return data;
}

function getUserExpertise(uid){
	// This actually needs to do the proper web server call to pull this from the database
	var data = [];

	if (uid==1){
		data = ['Pandemic Influenza or other infectious disease outbreak',
			'Natural Disasters and Severe Weather',
			'Biological Incident',
			'Chemical Emergencies ',
			'Nuclear/Radiation Incident',
			'Cyber Incident'];
	}

	return data;

}

function getUserDeploymentStatus(uid){
	// This actually needs to do the proper web server call to pull this from the database
	var status = "";
	if (uid==1){
		status = "Unavailable"
	}

	return status;
}

function getUserDeploymentHistory(uid) {
	// This actually needs to do the proper web server call to pull this from the database
	
	var data = [];

	if (uid==1){
		data = [
					['Hurricane 2017','USA','10/15/2018','Deployed'],
					['Hurricane 2017','USA','11/18/2017','Completed'],
					['Ebola 2015','Sierra Leon','9/6/2015','Completed']
			   ];
	}

	return data;
}




// Sets up form
function setupForm(){
	setDropdowns();
	setCheckboxes();

	// Gets user ID (if vailable) from URL Parameterization
	defaultValue = "NONE";
	var uid = getUrlParam("uid", defaultValue);

	if (uid != defaultValue) {

		// Handles Master Data
		showMasterData(getUserBasic(uid));

		// Handle Checkboxes
		selectCheckbox(getUserCommunication(uid),"communication");
		selectCheckbox(getUserExpertise(uid),"expertise");
		selectCheckbox(getUserTraining(uid),"training");
		selectCheckbox(getUserPartnershipSkills(uid),"partnership");
		selectCheckbox(getUserExperience(uid),"experience");

		// User Availability
		$('#availability').val(getUserDeploymentStatus(uid));

		// Show Deployment History
		addDeploymentRow(getUserDeploymentHistory(uid),uid);

	}


}

// Utiltiy for parsing URL for parameters

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

// Sets Master Data
function showMasterData(data){
	$('#first').val( data[0]);
	$('#last').val(data[1]);
	$('#phone').val(data[2]);
	$('#email').val(data[3]);
	$('#office').val(data[4]);

	$('#agency').val(data[5]);
	$('#job_series').val(data[6]);
	$('#employee_type').val(data[7]);

}

// Handles checkboxes selection
function selectCheckbox(data, checkboxName){
	$('input[name^="'+checkboxName+'"]').each(function(){
		var label = $(this).val();
		if (data.length > 0) {
			if(data.indexOf(label)>-1){
				alert('found');
				$(this).prop('checked', true);

			}
		}
	});
}

// Handles Tables row addition

function addDeploymentRow(data,uid){
	
	var tableStr = ""
	for (var i = 0; i < data.length; ++i){

		// This creates the buttons at the biggin of each row that link to a UserDeployment detail page and provides the uid in the URL
		tableStr += '<tr><td><button type="button" onclick=" window.open("UserDeployment.html?uid=' + uid + '","_blank")" class="btn btn-link">View Detail</button></td>'
		for (var j = 0; j < data[i].length; ++j){
			tableStr += ("<td>" + data[i][j] + "</td>")
		}
		tableStr += "</tr>"
	}

	$('#deployment_table').append(tableStr)
}

function addLanguageRow(){

	var options = generateOptions();
	row = 	'<tr>'+
				'<td><select class="form-control" name="select_language">' + options[0] + '</select></td>' + 
				'<td><select class="form-control" name="select_proficiency">' + options[1] + '</select></td>' + 
				'<td align="center"><button type="button" class="btn btn-link del">Remove</button></td>' +
			'</tr>';

	$('#language_table').append(row);
}
// Handles Selection Creation
function generateOptions(){

	var language = '<option value="" selected disabled hidden>Select One</option>';
	var proficiency = '<option value="" selected disabled hidden>Select One</option>';

	var data;

	// Creates option list for languages
	data = getLanguages();
	for (var key in data){
	    language += '<option>'+data[key]+'</option>';
	}

	// Creates option list for proficiencies
	data = getProficiencies()
	for (var key in data){
	    proficiency += '<option>'+data[key]+'</option>';
	}

	return [language,proficiency];
}

// Handles Row Deletion
$('#language_table').on('click', 'button', function(e){
   $(this).closest('tr').remove()
})

// Executes Saving Function (Post/Submit)
function btn_SUBMIT(){
	
	// Data to be used to push back to the server
	data_attributes = collectCheckboxes();
	data_master = [$('#first').val(),$('#last').val(),$('#phone').val(),$('#email').val(),
				   $('#office').val(),$('#agency').val(),$('#job_series').val(),
				   $('#employee_type').val()]

	// Collects User data
	defaultValue = "NONE";
	var uid = getUrlParam("uid", defaultValue);

	// If there is no UID, then it should handle insert into for NEW user
	if (uid == defaultValue) {
		// DO DATABASE STUFF
	}

	// Otherwise it should simply do updates (except for attributes)
	else {
		// DO DATABASE STUFF
	}


}

function collectCheckboxes(){
	checkboxNames = ["communication","expertise","training","partnership","experience"]

	var dict = {};
	for (var i = 0; i < checkboxNames.length; ++i){

		var list = [];

		$('input[name^="'+checkboxName[i]+'"]').each(function(){

			if ($(this).is;(':checked')) {
				list.push(this.val());
			}
		});

		dict[checkboxName[i]]=list;
	}

}