public class AccCaseTimelineCtrl {
	@AuraEnabled
    public static Timeline getTimeline(String accIdStr){
    // The component didnt recognize the method when the method parameter was of type ID
        Timeline result = new Timeline();
        try{
            Id accId=(Id) accIdStr;
            Account acc = [SELECT id, name from Account
                           WHERE id=:accId];
            result.name = acc.name + ' closed cases';
            List<Case> cases = [SELECT Id,Subject,ClosedDate,
                               Status, Type
                               FROM Case
                               WHERE AccountId=:accId AND
                               Status='Closed'
                               Order by ClosedDate desc];
            for(Case ca : cases){
                Timeline.Item item = new Timeline.Item();
                item.theDate = ca.ClosedDate.date();
                item.description = ca.Type + ' Cases closed ';
                result.entries.add(item);
            }
            return result;
        }catch(Exception e){
            System.debug('Exception:' + e);
            return null;
        }
    }
}