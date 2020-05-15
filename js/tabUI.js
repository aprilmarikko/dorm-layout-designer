const basicTab = document.getElementById('basic-tab');
const appliancesTab = document.getElementById('appliances-tab');
const techTab = document.getElementById('tech-tab');
const accessoriesTab = document.getElementById('accessories-tab');

var unusedTabs = [appliancesTab, techTab, accessoriesTab];
var currentTab = basicTab;
var currentBox = document.querySelector('.basic');

switchTabs(currentTab, 'basic');

basicTab.addEventListener('click', function(){
    switchTabs(basicTab, 'basic');
});
appliancesTab.addEventListener('click', function(){
    switchTabs(appliancesTab, 'appliances');
});
techTab.addEventListener('click', function(){
    switchTabs(techTab, 'tech');
});
accessoriesTab.addEventListener('click', function(){
    switchTabs(accessoriesTab, 'accessories');
});

function switchTabs(tab, boxTag) {
    unusedTabs.push(currentTab);
    currentTab = tab;


    if (document.querySelector(`.${boxTag}`) != currentBox) {
        currentBox.style.display = 'none';
        currentBox = document.querySelector(`.${boxTag}`);
        currentBox.style.display = 'flex';

    }

    for(var i = 0; i < 4; i++){
        if(unusedTabs[i] == currentTab){
            unusedTabs.splice(i, 1);
        }
    }
    for(var i = 0; i < 3; i++){
        unusedTabs[i].style.backgroundColor = 'rgba(225, 0, 0, 0.3)';
    }

    currentTab.style.backgroundColor = '#eeeeff';

}