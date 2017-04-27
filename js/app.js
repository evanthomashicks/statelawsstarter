// https://angular-ui.github.io/

// setup app and pass ui.bootstrap as dep
var myApp = angular.module("angularTypeahead", ["ui.bootstrap"]);

// define factory for data source
myApp.factory("States", function(){
  var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
  return states;
  
});

// setup controller and pass data source
myApp.controller("TypeaheadCtrl", function($scope, States) {

    $scope.newHeader = "";
    $scope.selected = undefined;
    $scope.selectedState = "";
    $scope.states = States;
    $scope.newHeaderName = "";
    $scope.newHeaderPages = [];
    $scope.newPageHeading = "";
    $scope.newPageBullet = "";
    $scope.newPageBullets = [];

    $scope.addState = function(){
        this.newArticleList.name = $scope.selected;
        console.log("Hey")
        // this.articlelist.name = this.$scope.selectedState;
        console.log(this.newArticleList.name);
        console.log(this.newArticleList);
    };

    // $scope.addPageName = function(){
    //   console.log("adding new page name");
    // };

    // $scope.addHeaderName = function(){
    //   console.log("adding new name to header");
    //   console.log($scope.newHeaderName); 
    // };

    $scope.$watch('newHeaderName',function(newValue,oldValue){
      if (newValue !== oldValue) {
        $scope.newHeaderName = newValue;
        console.log($scope.newHeaderName);
      }
    });

    $scope.$watch('newPageHeading',function(newValue,oldValue){
      if (newValue !== oldValue) {
        $scope.newPageHeading = newValue;
        console.log($scope.newPageHeading);
      }
    });

    // $scope.$watch('newPageBullet',function(newValue,oldValue){
    //   if (newValue !== oldValue) {
    //     $scope.newPageBullet = newValue;
    //     console.log($scope.newPageBullet);
    //   }
    // });

    $scope.addPageBullet = function(){
      console.log("adding new bullet to current page");
      // var bullet = $scope.newPageBullet;
      // $scope.newPageBullets.push(bullet);
      // $scope.newPageBullet = "";
      console.log($scope.newPageBullet);
      console.log($scope.newPageBullets);
    };


    // $scope.addHeader = function(header){
    //   console.log("User is adding a new header");
    //   this.newArticleList.headers.push(header);
    //   console.log(this.newArticleList.headers);
    // };
 
    // $scope.makeHeader = function() {
     
    // };

    // $scope.submit = function(){
      
    // };

     $scope.newArticleList = [{
       "name":"",
       "headers": [
         {
           "name":"",
           "pages": [
             {
               "heading":"",
               "bullet": [
                 ""
               ]
             }
           ]
         }
       ]
     }];

//     $scope.articlelist = [{
//   "name": "Alabama",
//   "headers": [
//     {
//       "name": "Deadlines to register",
//       "pages": [
//         {
//           "heading": "",
//           "bullet": [
//             "14 days before a General Election",
//             "11 Days before Primary and Municiple Elections"
//           ]
//         }
//       ]
//     },
//     {
//       "name": "Voter Application",
//       "pages": [
//         {
//           "heading": "You may register to vote in person in any of the following ways:",
//           "bullet": [
//             "When applying for or renewing your driver’s license or State Identification Card",
//             "At state or local government offices when applying or recertifying for Aid to Dependent Children, SNAP, TANF, Food Stamps, WIC, Medicaid or Rehabilitation Services",
//             "At public libraries",
//             "At armed forces recruiting stations",
//             "At the Board of Registrars located at the county seat in your county of residence."
//           ]
//         }
//       ]
//     },
//     {
//       "name": "Qualification",
//       "pages": [
//         {
//           "heading": "",
//           "bullet": [
//             "Be a citizen of the United States;",
//             "Reside in Alabama;",
//             "Be at least 18 years old on or before Election Day;",
//             "Not be barred from voting due to a disqualifying felony conviction",
//             "Not have been declared mentally incompetent by a court.",
//             "There is no time of residence required in Alabama"
//           ]
//         }
//       ]
//     },
//     {
//       "name": "Early Vote and Absentee Ballot",
//       "pages": [
//         {
//           "heading": "A voter may vote absentee:",
//           "bullet": [
//             "Will be absent from the county on Election Day;",
//             "Is ill or has a physical infirmity  that prevents a trip to the polling place;",
//             "Is a registered Alabama voter living outside the county;",
//             "Is an appointed election officer or poll watcher at a polling place other than his or her regular polling place;",
//             "Works a required shift, 10 hours or more, that coincides with polling hours."
//           ]
//         },
//         {
//           "heading": "BUSINESS/MEDICAL EMERGENCY VOTING :",
//           "bullet": [
//             "applications can be made after the absentee deadline but no later than 5 PM on the day before the election",
//             "if required by an employer under unforeseen circumstances to be out of the county on election day for an emergency business trip",
//             "Has a medical emergency requiring treatment from a licensed physician within 5 days of the election."
//           ]
//         },
//         {
//           "heading": "Rules and Deadlines:",
//           "bullet": [
//             "An absentee ballot application must be turned in no later than the fifth calendar day before the election.",
//             "An absentee ballot must be postmarked or hand-delivered by no later than 5 p.m. on the day prior to Election Day. If mailed, the absentee ballot must be received by the Absentee Ballot Election Manager no later than noon on Election Day"
//           ]
//         }
//       ]
//     },
//     {
//       "name": "I.D. and Polling Locations",
//       "pages": [
//         {
//           "heading": "At the polling station:",
//           "bullet": [
//             "Valid Alabama driver's license or non-driver ID card;",
//             "Valid Alabama photo voter ID card;",
//             "Valid state-issued ID (from Alabama or another state);",
//             "Valid federal-issued ID;",
//             "Valid U.S. passport;",
//             "Valid employee ID from the Federal Government, State of Alabama, County, Municipality, Board or other Alabama entity;",
//             "Valid student or employee ID card issued by a college or university in the state, provided it includes a photo;",
//             "Valid student or employee ID issued by a state institution of higher learning in any other state;",
//             "Valid U.S. military ID card containing a photo",
//             "Valid tribal ID card containing a photo."
//           ]
//         },
//         {
//           "heading": "Without one of these forms of ID, a voter can:",
//           "bullet": [
//             "Vote a challenged or provisional ballot, or",
//             "Vote, if he or she is identified as a voter on the poll list who is eligible to vote by two poll workers and both poll workers sign the voting sign-in register by the voter's name."
//           ]
//         },
//         {
//           "heading": "Exceptions to the photo ID requirement:",
//           "bullet": [
//             "A voter who is a member of the military or who resides overseas is eligible to vote by absentee ballot pursuant to the Uniformed and Overseas Citizens Absentee Voting Act (UOCAVA) is not required to provide ID when voting an absentee ballot",
//             "A voter who is entitled to vote by absentee ballot pursuant to the Voting Accessibility for the Elderly and Handicapped Act or any other federal law shall not be required to produce identification when voting by absentee ballot."
//           ]
//         },
//         {
//           "heading": "Find your Poling Location:",
//           "bullet": [
//              "Visit   https://myinfo.alabamavotes.gov/VoterView/PollingPlaceSearch.do",
//              "Call 1-866-687-8683 "
//           ]
//         }
//       ]
//     }
//   ]
// }];
// console.log($scope.articlelist);
	
});

