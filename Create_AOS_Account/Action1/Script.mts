' to work successfully, you need to set the value of the userName value
' in the datatable to be a new, unique value, not currently registerd in AOS
' remember that after you change the value in the datatable, you must hit the <enter> key
' this is an Exel thing, not a UFT thing


SystemUtil.CloseProcessByName "iexplore.exe"
SystemUtil.Run "iexplore.exe", "http://nimbusserver:8000/"

Browser("Advantage Shopping").Page("Advantage Shopping").Link("User Icon").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("CREATE NEW ACCOUNT").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link 2")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Username").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Username")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("usernameRegisterPage").Set DataTable("userName", dtGlobalSheet) @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("usernameRegisterPage")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailRegisterPage").Set "2@2.com" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailRegisterPage")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("passwordRegisterPage").Set "Password1" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("passwordRegisterPage")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("confirm_passwordRegisterPage").Set "Password1" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("confirm passwordRegisterPage")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("first_nameRegisterPage").Set "fname" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("first nameRegisterPage")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("last_nameRegisterPage").Set "lname" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("last nameRegisterPage")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("phone_numberRegisterPage").Set "555-1212" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("phone numberRegisterPage")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebList("countryListboxRegisterPage").Select "United States" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebList("countryListboxRegisterPage")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("cityRegisterPage").Set "Dallas" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("cityRegisterPage")_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("addressRegisterPage").Set "212 Main Street" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("addressRegisterPage")_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("state_/_province_/_regionRegis").Set "Texas" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("state / province / regionRegis")_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("postal_codeRegisterPage").Set "75006" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("postal codeRegisterPage")_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("allowOffersPromotion").Set "OFF" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("allowOffersPromotion")_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("I agree to terms and conditions").Set "ON" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("i agree")_;_script infofile_;_ZIP::ssf22.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("REGISTER").Click @@ hightlight id_;_Browser("Advantage Shopping 2").Page("Advantage Shopping").WebButton("register btnundefined")_;_script infofile_;_ZIP::ssf25.xml_;_
 
if Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("User name already exists").Exist (10) then
	reporter.ReportEvent micFail, "CreateAccount", "Account creation failed because username >" & datatable("userName",dtGlobalSheet) & "< already exists"
	ExitTestIteration
else
	reporter.ReportEvent micPass, "CreateAccount", "Account >" & datatable("userName",dtGlobalSheet) & "< was successfully created"
end if 

Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("rsercely1").Check CheckPoint("Validate User was created")

foo = 1 ' to set breakpoint

