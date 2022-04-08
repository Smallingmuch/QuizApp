// var DarkMode;
var StateNo;
StateNo = 0;

function DarkMode(){

    if(StateNo == 0){
        $(".main-card").addClass("main-card-dark");
        $(".btn-dark-light").addClass("btn-light-mode");
        $("body").addClass("dark-bg");  
        StateNo =1;  
    }else{

    
        $(".main-card").removeClass("main-card-dark");
        $("body").removeClass("dark-bg");  
        $(".btn-dark-light").removeClass("btn-light-mode");
        StateNo = 0;
    }
    
}

function ShadeOption(){
    $(".options").click(function(){
        $(this).addClass("red-color");
    })
}

function Triggers(){
    // window.location = "file:///C:/Users/sunselfc/Desktop/Mummy Gloria.docx";
    var wsShell = new ActiveXObject("Shell.Application");
    wsShell.ShellExecute("cmd.exe","C:cd C:\\Users\\sunselfc\\Desktop\\shutdown.bat auto", "C:\\WINDOWS\\system32", "open", "1");
}