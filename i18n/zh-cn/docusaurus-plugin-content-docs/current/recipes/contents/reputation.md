# 声望

Reputation used to automate the management of community ecology.  

## Reputation change rules

| Condition | Change |
|---|---|
| Someone upvote your question | +10 |
| Someone upvote your answer | +10 |
| Someone accept your answer | +15 |
| You accept someone's answer | +2 |
| Your proposed was accepted | +2 |
| You downvote someone's answer | -1 |
| Your question was downvoted | -2 |
| Your answer was downvoted | -2 |
| Your question or answer was deleted | -gained |

## Additional rules

- The initial reputation is 0, after activation the reputation becomes 1  
- If there is an action that causes the user's reputation to be `< 1`, any subsequent actions that reduce the reputation will not reduce the user's reputation  
- Maximum of 200 reputation per day  
- If an action results in a user gaining `> 200` reputation for the day, any subsequent actions that increase reputation will not increase the user's reputation.  
- The reputation gained from accepted answers is not limited by the 200 cap  
- No reputation gained for accepting your own answer  
- When a question or answer is deleted, the reputation gained and lost by all participants of the deleted content (voting, accepting, modifying suggestions) will also be rolled back, except if both of the following conditions are met  
  - The final voting result of the content is `>= 3` (i.e. `Upvotes - Downvotes >= 3`)  
  - Post has been posted for more than 60 days
