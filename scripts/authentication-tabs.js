const tabsContainer = document.querySelector('.tabs');
const tabList = tabsContainer.querySelector(':scope > [role="tablist"]');
const tabs = Array.from(tabList.querySelectorAll(':scope > [role="tab"]'));
const tabPanelsContainer = tabsContainer.querySelector(':scope > .tab-panels');
const tabPanels = Array.from(tabPanelsContainer.querySelectorAll(':scope > [role="tabpanel"]'));

function showTab(targetTab) {
  for (const tab of tabs) {
    if (tab === targetTab) continue;
    tab.setAttribute('aria-selected', 'false');
    tab.tabIndex = -1;
  }
  targetTab.setAttribute('aria-selected', 'true');
  targetTab.tabIndex = 0;

  const targetTabPanel = document.getElementById(
    targetTab.getAttribute('aria-controls')
  );
  for (const panel of tabPanels) {
    if (panel === targetTabPanel) continue;
    panel.hidden = true;
  }
  targetTabPanel.hidden = false;
}

tabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    showTab(event.target)
  });
  tab.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === '') {
      event.preventDefault();
      event.stopPropagation();

      showTab(event.target)
    }
  });
});