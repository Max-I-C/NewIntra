/* Ici on va gerer tout les elements du background */
chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [42],
        addRules: [
            {
                id: 42,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        transform: {
                            queryTransform: {
                                addOrReplaceParams: [
                                    { key: "campus_id", value: "12" }
                                ]
                            }
                        }
                    }
                },
                condition: {
                    urlFilter: "project_data.json",
                    resourceTypes: ["xmlhttprequest"]
                }
            }
        ]
    });
});
