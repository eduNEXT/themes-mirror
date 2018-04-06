var fieldFirts = [".text-name",
                  ".text-username",
                  ".password-password",
                  ".email-email"]

var fieldSecond = [".text-city",
                   ".select-gender",
                   ".select-country",
                   ".textarea-goals",
                   ".select-year_of_birth",
                   ".select-level_of_education"]

      
this.hiddenElements(fieldSecond); 
    

$(".continue-button").click(function() {

    $(".register-button").removeClass("hidden");
    $(".back-button").removeClass("hidden");
    $(".continue-button").addClass("hidden");      
    hiddenElements(fieldFirts);
    DisplayElements(fieldSecond);
}) 


$(".back-button").click(function() {

    $(".register-button").addClass("hidden");
    $(".back-button").addClass("hidden");
    $(".continue-button").removeClass("hidden");
    hiddenElements(fieldSecond);
    DisplayElements(fieldFirts);
})  



function hiddenElements(field) {
    field.forEach(function(element) {
        let fieldClass = element;
        $(fieldClass).addClass("hidden");
    });
}

function DisplayElements(field) {
    field.forEach(function(element) {
        let fieldClass = element;
        $(fieldClass).removeClass("hidden");
    });
}
    