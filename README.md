# 7-11

readme:
*This README file will specify the rule of the games. This is 7-11 or Craps as some may refer to it.


Craps Rules:
One player, known as the “shooter,” throws the dice at the craps table. All wagers must be placed before the shooter throws the dice. The types of wagers that can be made are:


Pass Line
An even money bet, made on the first roll of the dice (known as the “come out roll”). You win if a 7 or 11 roll, or lose if 2, 3, or 12 roll (known as “craps”). Any other number that rolls becomes the “point” and the point must roll again before a 7 to win.

Don't Pass Line
An even money bet, which is the opposite of the pass line. You lose on the “come out” roll if the shooter rolls a 7 or 11. You win on a 2 or 3 (12 is a tie). Once a point is established, you lose if the point is thrown and win if a 7 rolls.

Come Bets
Made anytime after the first roll when a shooter has a point to make. You win on a 7 or 11 and lose on a 2, 3 or 12. Any other number becomes your “come point” and must be repeated for you to win before a 7 rolls.

Don't Come Bets
Made anytime after the first roll when a shooter has a point to make. It is the opposite of the come bet. You win if 2 or 3 roll (12 is a tie), and lose if 7 or 11 roll. Any other number rolled becomes your “come point” and if repeated you lose. If a 7 rolls you win.


More Documentation related to rules
https://www.venetianlasvegas.com/casino/table-games/craps-basic-rules.html#:~:text=You%20win%20if%20a%207,before%20a%207%20to%20win.

What I'll need:

1. Function that handles if a shooter doesnt roll their "point" => So when a shooter doesnt roll a 7,11,12,2,3 on their first roll any other number is a point. shooter or player must roll this point again, but if they roll a 7 before rolling their point they lose.

2. A function that determines the winning first roll and the losing first rolls => so winning rolls are 7 or 11 and losing rolls are 12,2,3