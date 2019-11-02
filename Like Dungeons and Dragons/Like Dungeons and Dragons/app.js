alert('Welcome to the game "Like Dungeons & Dragons"\nA few things you should know,\nif its your first time playing:\n' +
    '1) Data is kept as long as your browser is open.\nOnce you close it - all data will be erased.\n2) When requested to enter a number or a word,\n' +
    'enter exactly as offered in the options window.\nOnce entered a "Non-expected" number or word,\nthe game will crash.\n' +
    'If requested to enter one or more word/s without an offer,\ntype it with a capital first letter.\n3) If you have finished the game,\ntake a screenshot to prove it.\n\nThats it! Now open your charater and start you adventure!');
var Newchar = CreatingChar();
CreatingCharStats(Newchar);
alert("GREAT CHOICE!\n\nYour character is:\nCharacter name: " + Newchar.NAME + "\nRace: " + Newchar.RACE.ORIGIN + "\nClass: " + Newchar.CL.SPEC + "\n" + Newchar.STATS.print() + "\n\nClick OK to start.\n");
Main_menu(Newchar);
function Main_menu(char) {
    var action = +prompt("Main Menu\n\n" +
        "You have a lot of options now!\n\n1) Review character info\n\n2) Review items\n\n3) Skills info\n\n4) Train\n\n5) Dungeon Run\n\n6) Local Trader\n\n*Enter only the number of the chosen action*\n");
    switch (action) {
        case 1: //char info
            alert(char.print() + char.STATS.print() + "\n");
            Main_menu(char);
            break;
        case 2: //items info
            var x = void 0;
            do {
                x = +prompt(char.print_items() + "\n" + char.print_equipped() + "\n\nTo equip a different item type it's number.\nTo go back to main menu type 0.\n\n");
                if (x == 0) {
                    break;
                }
                else {
                    char.EQUIP(char.INVENTORY[x - 1]);
                }
            } while (x != 0);
            Main_menu(char);
            break;
        case 3: //skills info
            var choice1 = void 0;
            do {
                choice1 = prompt("Skill Points: " + char.SKILL_POINTS + "\n\n" + char.print_skills() + "\n\nDo you want to upgrade a skill?\nY - 'Yes', N - 'No'");
                switch (choice1) {
                    case "Y":
                    case "y":
                    case "yes":
                    case "YES":
                    case "Yes":
                        var choice2 = +prompt("Skill Points: " + char.SKILL_POINTS + "\n\nChoose a skill you want to upgrade with Skill Points.\n\n" + char.print_skills());
                        var choice3 = +prompt("How many skill points would you like to assign?\n\nSkill Points left: " + char.SKILL_POINTS);
                        if (choice3 > char.SKILL_POINTS) {
                            alert("You're trying to cheat uh..? No cake for you!\n\nYou Cannot Add More Points Than What You Got - CAPISH??");
                            break;
                        }
                        else {
                            char.EQ_DMG[choice2 - 1] = char.EQ_DMG[choice2 - 1] + choice3;
                            char.SKILL_POINTS = -(choice3);
                        }
                        break;
                }
            } while (choice1 != "N");
            Main_menu(char);
            break;
        case 4: //trainning
            var enemy = CreateEnemy(char);
            var base_hp = char.STATS.HP;
            Battle_Mode(char, enemy, true);
            char.STATS.HP = -(char.STATS.HP);
            char.STATS.HP = base_hp;
            if (isLevelUp(char) == true) {
                alert("Yes!!! You leveled up!\n" + char.STATS.print());
            }
            else {
                var exp = 5;
                var gold = 20;
                for (var i = 1; i < char.STATS.LVL; i++) {
                    exp += 2;
                    gold += 10;
                }
                alert("You killed that stupid " + enemy.RACE.ORIGIN + "!\n\nREWARDS:\n\nEXP: " + exp + "\nGOLD: " + gold + "\n\nBack to main menu.");
            }
            Main_menu(char);
            break;
        case 5: //dungeon
            Dungeon_Mode(char);
            Main_menu(char);
            break;
        case 6: //marketplace
            var market = void 0;
            do {
                market = +prompt("Ho Ho Ho! Is it Christmas already?!?\nI'm gonna buy all the things that you don't need.\nThe money you gonna get depends on the quality, ya know..?\n\n" + char.print_items() + "\nYour Gold: " + char.GOLD + "\n\nDon't forget, 0 to exit.");
                if (market == 0) {
                    break;
                }
                else {
                    char.GOLD = char.INVENTORY[market - 1].STATS * 2;
                    char.INVENTORY[market - 1] = undefined;
                }
            } while (market != 0);
            Main_menu(char);
            break;
    }
}
function CreatingChar() {
    var choose_race = +prompt("Choose a race for you character:\n1 - Human\n2 - Elf\n3 - Demon\n*Please enter only the number of the chosen race.");
    var choose_class = +prompt("Choose a class for you character:\n1 - Swordsmaster\n2 - Wizard\n3 - DragonSlayer\n*Please enter only the number of the chosen race.");
    switch (choose_race) {
        case 1:
            switch (choose_class) {
                case 1: //Human Race
                    var Human_Swordmaster = new Character(prompt("Enter a name for you character:"), new Race("Summon Dragon", 70, "Pierce Attack", 80, "Human"), new Class("Summon Dragon", 70, "Pierce Attack", 80, "Swing Attack", 70, "Backstab", 50, "Human", "Swordsmaster"), new Stats(100000, 10, 10), new Item("Long Sword", "Sword", 5));
                    return Human_Swordmaster;
                case 2:
                    var Human_Wizard = new Character(prompt("Enter a name for you character:"), new Race("Summon Dragon", 70, "Pierce Attack", 80, "Human"), new Class("Summon Dragon", 70, "Pierce Attack", 80, "Flame Strike", 90, "Icy Niddles", 70, "Human", "Wizard"), new Stats(10, 10, 10), new Item("Wooden Staff", "Staff", 5));
                    return Human_Wizard;
                case 3:
                    var Human_DragonSlayer = new Character(prompt("Enter a name for you character:"), new Race("Summon Dragon", 70, "Pierce Attack", 80, "Human"), new Class("Summon Dragon", 70, "Pierce Attack", 80, "Dragon Roar", 100, "Dragon Fist", 70, "Human", "DragonSlayer"), new Stats(10, 10, 10), new Item("Basic Wings", "Wings", 5));
                    return Human_DragonSlayer;
            }
            break;
        case 2: //Elf Race
            switch (choose_class) {
                case 1:
                    var Elf_Swordmaster = new Character(prompt("Enter a name for you character:"), new Race("Summon Griffin", 70, "Power of Nature", 80, "Elf"), new Class("Summon Griffin", 70, "Power of Nature", 80, "Swing Attack", 70, "Backstab", 50, "Elf", "Swordsmaster"), new Stats(10, 10, 10), new Item("Long Sword", "Sword", 5));
                    return Elf_Swordmaster;
                case 2:
                    var Elf_Wizard = new Character(prompt("Enter a name for you character:"), new Race("Summon Griffin", 70, "Power of Nature", 80, "Elf"), new Class("Summon Griffin", 70, "Power of Nature", 80, "Flame Strike", 90, "Icy Niddles", 70, "Elf", "Wizard"), new Stats(10, 10, 10), new Item("Wooden Staff", "Staff", 5));
                    return Elf_Wizard;
                case 3:
                    var Elf_DragonSlayer = new Character(prompt("Enter a name for you character:"), new Race("Summon Griffin", 70, "Power of Nature", 80, "Elf"), new Class("Summon Griffin", 70, "Power of Nature", 80, "Dragon Roar", 100, "Dragon Fist", 70, "Elf", "DragonSlayer"), new Stats(10, 10, 10), new Item("Basic Wings", "Wings", 5));
                    return Elf_DragonSlayer;
            }
            break;
        case 3: //Demon Race
            switch (choose_class) {
                case 1:
                    var Demon_Swordmaster = new Character(prompt("Enter a name for you character:"), new Race("Summon Imps", 70, "Fire from Hell", 80, "Demon"), new Class("Summon Imps", 70, "Fire from Hell", 80, "Swing Attack", 70, "Backstab", 50, "Demon", "Swordsmaster"), new Stats(10, 10, 10), new Item("Long Sword", "Sword", 5));
                    return Demon_Swordmaster;
                case 2:
                    var Demon_Wizard = new Character(prompt("Enter a name for you character:"), new Race("Summon Imps", 70, "Fire from Hell", 80, "Demon"), new Class("Summon Imps", 70, "Fire from Hell", 80, "Flame Strike", 90, "Icy Niddles", 70, "Demon", "Wizard"), new Stats(10, 10, 10), new Item("Wooden Staff", "Staff", 5));
                    return Demon_Wizard;
                case 3:
                    var Demon_DragonSlayer = new Character(prompt("Enter a name for you character:"), new Race("Summon Imps", 70, "Fire from Hell", 80, "Demon"), new Class("Summon Imps", 70, "Fire from Hell", 80, "Dragon Roar", 100, "Dragon Fist", 70, "Demon", "DragonSlayer"), new Stats(10, 10, 10), new Item("Basic Wings", "Wings", 5));
                    return Demon_DragonSlayer;
            }
            break;
    }
}
function CreatingCharStats(char) {
    switch (char.RACE.ORIGIN) {
        case "Human":
            switch (char.CL.SPEC) {
                case "Swordsmaster":
                    char.STATS.HP = 250;
                    char.STATS.DEF = 15;
                    char.STATS.ATK = 30;
                    break;
                case "Wizard":
                    char.STATS.HP = 200;
                    char.STATS.DEF = 20;
                    char.STATS.ATK = 15;
                    break;
                case "DragonSlayer":
                    char.STATS.HP = 300;
                    char.STATS.DEF = 20;
                    char.STATS.ATK = 30;
                    break;
            }
            break;
        case "Elf":
            switch (char.CL.SPEC) {
                case "Swordsmaster":
                    char.STATS.HP = 200;
                    char.STATS.DEF = 15;
                    char.STATS.ATK = 25;
                    break;
                case "Wizard":
                    char.STATS.HP = 250;
                    char.STATS.DEF = 25;
                    char.STATS.ATK = 15;
                    break;
                case "DragonSlayer":
                    char.STATS.HP = 300;
                    char.STATS.DEF = 20;
                    char.STATS.ATK = 27;
                    break;
            }
            break;
        case "Demon":
            switch (char.CL.SPEC) {
                case "Swordsmaster":
                    char.STATS.HP = 250;
                    char.STATS.DEF = 20;
                    char.STATS.ATK = 35;
                    break;
                case "Wizard":
                    char.STATS.HP = 300;
                    char.STATS.DEF = 30;
                    char.STATS.ATK = 20;
                    break;
                case "DragonSlayer":
                    char.STATS.HP = 350;
                    char.STATS.DEF = 25;
                    char.STATS.ATK = 30;
                    break;
            }
            break;
    }
}
function CreateEnemy(char) {
    var enemyRace = Math.ceil(Math.random() * (13 - 1) + 1); //1,2,3 - Goblin, 4,5,6 - Orc, 7,8,9 - Angry Dwarf, 10 - Treasure Box, 11 - Golden Rabbit
    switch (enemyRace) {
        case 1:
        case 2:
        case 3:
            var Goblin = new Character("Goblin", new Race("Bite", 50, "Rock Throw", 45, "Goblin"), new Class("Bite", 50, "Rock Throw", 45, "", 0, "", 0, "Goblin", "The Dark Terittory"), new Stats(10, 10, 10), new Item("Mace", "Bot Weapon", 10));
            Goblin.STATS = new Stats(150, 10, 10);
            for (var i = 1; i < char.STATS.LVL; i++) {
                Goblin.STATS.HP = 50;
                Goblin.STATS.DEF = 5;
                Goblin.STATS.ATK = 10;
                Goblin.STATS.LVL = 1;
            }
            return Goblin;
        case 4:
        case 5:
        case 6:
            var Orc = new Character("Orc", new Race("Head Slam", 30, "Strong Punch", 25, "Orc"), new Class("Head Slam", 30, "Strong Punch", 25, "", 0, "", 0, "Orc", "The Dark Terittory"), new Stats(10, 10, 10), new Item("Big Axe", "Bot Weapon", 10));
            Orc.STATS = new Stats(180, 20, 20);
            for (var i = 1; i < char.STATS.LVL; i++) {
                Orc.STATS.HP = 50;
                Orc.STATS.DEF = 5;
                Orc.STATS.ATK = 10;
                Orc.STATS.LVL = 1;
            }
            return Orc;
        case 7:
        case 8:
        case 9:
            var Dwarf = new Character("Angry Dwarf", new Race("Axe Attack", 25, "Call for Aid", 40, "Dwarf"), new Class("Axe Attack", 25, "Call for Aid", 40, "", 0, "", 0, "Dwarf", "The Wild Forest"), new Stats(10, 10, 10), new Item("Small Axe", "Bot Weapon", 10));
            Dwarf.STATS = new Stats(130, 40, 40);
            for (var i = 1; i < char.STATS.LVL; i++) {
                Dwarf.STATS.HP = 50;
                Dwarf.STATS.DEF = 5;
                Dwarf.STATS.ATK = 10;
                Dwarf.STATS.LVL = 1;
            }
            return Dwarf;
        case 10:
            var Treasure_Box = new Character("Treasure Box", new Race("", 0, "", 0, "Treasure Box"), new Class("", 0, "", 0, "", 0, "", 0, "Treasure Box", "Rare Encounter"), new Stats(0, 0, 0), new Item("xxxx", "xxxx", 0));
            for (var i = 1; i < char.STATS.LVL; i++) {
                Treasure_Box.STATS.LVL = 1;
            }
            return Treasure_Box;
        case 11:
            var Golden_Rabbit = new Character("Golden Rabbit", new Race("Bite", 5, "Tried to Escape", 0, "Golden Rabbit"), new Class("Bite", 5, "Tried to Escape", 0, "", 0, "", 0, "Golden Rabbit", "Rare Encounter"), new Stats(10, 10, 10), new Item("Magic Carrot", "Carrot", 50));
            Golden_Rabbit.STATS = new Stats(100, 10, 10);
            for (var i = 1; i < char.STATS.LVL; i++) {
                Golden_Rabbit.STATS.HP = 50;
                Golden_Rabbit.STATS.DEF = 5;
                Golden_Rabbit.STATS.ATK = 10;
                Golden_Rabbit.STATS.LVL = 1;
            }
            return Golden_Rabbit;
        case 12:
        case 13:
            var Merchant = new Character("Crossing Merchant", new Race("", 0, "", 0, "Merchant"), new Class("", 0, "", 0, "", 0, "", 0, "Merchant", "The Kingdom of Adolance"), new Stats(2000, 100, 100), new Item("Rare Item", "Bot Weapon", 0));
            return Merchant;
    }
}
function Battle_Mode(char, enemy, yourturn) {
    switch (yourturn) {
        case true:
            switch (enemy.RACE.ORIGIN) {
                case "Treasure Box":
                    alert("WOOOWW!!! It's a super rare Treasure Box!!! Click OK to open it!");
                    var random_gold = Math.ceil(Math.random() * (500 - 300) + 300);
                    var item = Math.ceil(Math.random() * (10 - 1) + 1);
                    char.GOLD = random_gold;
                    switch (item) {
                        case 1:
                        case 2:
                        case 3:
                            switch (char.CL.SPEC) {
                                case "Swordsmaster":
                                    var Leg_Sword = new Item("Legendary Black Sword", "Sword", 350);
                                    char.addItem(Leg_Sword);
                                    alert("You got a lot of gold: " + random_gold + "\n\nAlso you got a new item: Legendary Black Sword.\n\nGo to your items list to check it out!");
                                    Main_menu(char);
                                    break;
                                case "Wizard":
                                    var Leg_Staff = new Item("Legendary Black Staff", "Staff", 350);
                                    char.addItem(Leg_Staff);
                                    alert("You got a lot of gold: " + random_gold + "\n\nAlso you got a new item: Legendary Black Staff.\n\nGo to your items list to check it out!");
                                    Main_menu(char);
                                    break;
                                case "DragonSlayer":
                                    var Leg_Wings = new Item("Wings of the Night Dragon", "Wings", 250);
                                    char.addItem(Leg_Wings);
                                    alert("You got a lot of gold: " + random_gold + "\n\nAlso you got a new item: Wings of the Night Dragon.\n\nGo to your items list to check it out!");
                                    Main_menu(char);
                                    break;
                            }
                            break;
                        case 4:
                        case 5:
                        case 6:
                            for (var i = 1; i <= 3; i++) {
                                char.STATS.LVL = 1;
                                char.STATS.HP = 50;
                                char.STATS.DEF = 5;
                                char.STATS.ATK = 5;
                                char.SKILL_POINTS = 5;
                            }
                            alert("You got a lot of gold: " + random_gold + "\n\nAlso you found an Ancient Scroll with a lot of knowledge.\nBy reading it you got 3 lvls up!\n\n");
                            Main_menu(char);
                            break;
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                            switch (char.CL.SPEC) {
                                case "Swordsmaster":
                                    var Rare_Sword = new Item("Rare Divine Sword", "Sword", 200);
                                    char.addItem(Rare_Sword);
                                    alert("You got a lot of gold: " + random_gold + "\n\nAlso you got a new item: Rare Divine Sword.\n\nGo to your items list to check it out!");
                                    Main_menu(char);
                                    break;
                                case "Wizard":
                                    var Rare_Staff = new Item("Rare Divine Staff", "Staff", 200);
                                    char.addItem(Rare_Staff);
                                    alert("You got a lot of gold: " + random_gold + "\n\nAlso you got a new item: Rare Divine Staff.\n\nGo to your items list to check it out!");
                                    Main_menu(char);
                                    break;
                                case "DragonSlayer":
                                    var Rare_Wings = new Item("Rare Demon Wings", "Wings", 180);
                                    char.addItem(Rare_Wings);
                                    alert("You got a lot of gold: " + random_gold + "\n\nAlso you got a new item: Rare Demon Wings.\n\nGo to your items list to check it out!");
                                    Main_menu(char);
                                    break;
                            }
                            break;
                    }
                    break;
                case "Merchant":
                    alert("You bumped into a " + enemy.NAME + ".\n\nGo say hello..\n");
                    var rarity_of_items = Math.round(Math.random() * (5 - 1) + 1);
                    var trade_window = void 0;
                    switch (rarity_of_items) {
                        case 1:
                        case 2:
                            trade_window = prompt("Hello there young warrior.\nI come from " + enemy.CL.SPEC + ".\nThis time I don't have very good stuff.\nWould you like to take a look?\n\nY - 'Yes', N - 'No'");
                            switch (trade_window) {
                                case "Y":
                                case "y":
                                case "yes":
                                case "Yes":
                                case "YES":
                                    enemy.addItem(new Item("Ebon Blade", "Sword", 20));
                                    enemy.addItem(new Item("A Beautiful Ring", "Ring", 30));
                                    enemy.addItem(new Item("Brave Men Armor", "Armor", 50));
                                    var choice = void 0;
                                    do {
                                        choice = +prompt("Well have a look..\n" + enemy.print_items() + "\nEach of the merch I got here is for a 100 Gold.\n\nYour Gold: " + char.GOLD + ".\n\n**Type the number of the item to buy it or type 0 to be on your way.\n\n");
                                        if (choice == 0) {
                                            break;
                                        }
                                        else {
                                            char.GOLD = -100;
                                            char.addItem(enemy.INVENTORY[choice - 1]);
                                            enemy.INVENTORY[choice - 1] = undefined;
                                            alert("Thank you! Thank you!");
                                        }
                                    } while (choice != 0);
                                    alert("OK now, See you around. Be safe.");
                                    Main_menu(char);
                                    break;
                                default:
                                    alert("OK then. See you around.");
                                    Main_menu(char);
                                    break;
                            }
                            break;
                        case 3:
                        case 4:
                            trade_window = prompt("Hello there! I brought nice things with me today.\n\nMind having a look?\nY - 'Yes', N - 'No'\n\n");
                            switch (trade_window) {
                                case "y":
                                case "Y":
                                case "yes":
                                case "Yes":
                                case "YES":
                                    enemy.addItem(new Item("Staff of Sauron", "Staff", 100, 200));
                                    enemy.addItem(new Item("Sword of Blood", "Sword", 120, 250));
                                    enemy.addItem(new Item("Sword of Sir Lancelot", "Sword", 300, 500));
                                    enemy.addItem(new Item("Armor of Zodiacs", "Armor", 180, 400));
                                    enemy.addItem(new Item("Wings of Babylon", "Wings", 150, 700));
                                    enemy.addItem(new Item("Wings of Bal'zahar", "Wings", 80, 400));
                                    enemy.addItem(new Item("Ring of Justice", "Ring", 80, 300));
                                    var choice = void 0;
                                    do {
                                        choice = +prompt("Well take a look..\n\n" + enemy.print_merch_items() + "Your Gold: " + char.GOLD + ".\n**Type the number of the item to buy it or type 0 to be on your way.\n\n");
                                        if (choice == 0) {
                                            break;
                                        }
                                        else {
                                            char.GOLD = -(enemy.INVENTORY[choice - 1].PRICE);
                                            char.addItem(enemy.INVENTORY[choice - 1]);
                                            enemy.INVENTORY[choice - 1] = undefined;
                                            alert("Thank you! Thank you!");
                                        }
                                    } while (choice != 0);
                                    alert("OK now, bye bye then!");
                                    Main_menu(char);
                                    break;
                                default:
                                    alert("OK then. See you around.");
                                    Main_menu(char);
                                    break;
                            }
                            break;
                        case 5:
                            trade_window = prompt("Hey Hey there champion!\nI got some reeeeal good stuuf today!\nYOU GOTTA TAKE A LOOK!!\n\nY - 'Yes', N - 'No'");
                            switch (trade_window) {
                                case "y":
                                case "Y":
                                case "yes":
                                case "Yes":
                                case "YES":
                                    enemy.addItem(new Item("The Book of The Damned", "Book", 400, 2000));
                                    enemy.addItem(new Item("Wings of Fallen Angles", "Wings", 300, 2400));
                                    enemy.addItem(new Item("The First Satan's Ring", "Ring", 300, 2700));
                                    enemy.addItem(new Item("Sword of Immortality", "Sword", 500, 3500));
                                    enemy.addItem(new Item("Sword of Evil Dawn", "Sword", 400, 3000));
                                    enemy.addItem(new Item("Cloak of The Black Swordsman", "Cloak", 350, 3200));
                                    enemy.addItem(new Item("Armor of the Fallen King", "Armor", 600, 3500));
                                    var choice = void 0;
                                    do {
                                        choice = +prompt("Here..\n\n" + enemy.print_merch_items() + "Your Gold: " + char.GOLD + ".\n**Type the number of the item to buy it or type 0 to be on your way.\n\n");
                                        if (choice == 0) {
                                            break;
                                        }
                                        else {
                                            char.GOLD = -(enemy.INVENTORY[choice - 1].PRICE);
                                            char.addItem(enemy.INVENTORY[choice - 1]);
                                            enemy.INVENTORY[choice - 1] = undefined;
                                            alert("This is gonna be usefull!");
                                        }
                                    } while (choice != 0);
                                    alert("Well now I feel more safe,\nknowing there is a stronger warrior to protect us.\n");
                                    Main_menu(char);
                                    break;
                                default:
                                    alert("See ya around! Keep killin' evil things!");
                                    Main_menu(char);
                                    break;
                            }
                            break;
                    }
                    break;
                default:
                    if (enemy.STATS.HP <= 0) {
                        if (enemy.RACE.ORIGIN == "Golden Rabbit") {
                            for (var i = 0; i < 1; i++) {
                                char.STATS.LVL = 1;
                                char.STATS.HP = 50;
                                char.STATS.DEF = 5;
                                char.STATS.ATK = 5;
                                char.SKILL_POINTS = 5;
                            }
                            char.GOLD = 200;
                            alert("You killed the Golden Rabbit!!\n\nYou leveled up and got 200 Gold!");
                            break;
                        }
                        else {
                            var exp = 5;
                            var gold = 20;
                            for (var i = 1; i < char.STATS.LVL; i++) {
                                exp += 2;
                                gold += 10;
                            }
                            char.STATS.EXP = exp;
                            char.GOLD = gold;
                            break; //exiting battle mode
                        }
                    }
                    else if (char.STATS.HP <= 0) {
                        alert("GAME OVER...");
                        break;
                    }
                    else {
                        var choose_atk = +prompt("Holy ****!! It's a " + enemy.RACE.ORIGIN + " from " + enemy.CL.SPEC + "\n\nYour HP: " + char.STATS.HP + " **************** Enemy HP: " + enemy.STATS.HP +
                            "\n\n\nChoose a skill to attack the " + enemy.RACE.ORIGIN + "!\n" + char.print_skills() + "\n");
                        Enemy_dmg(char, enemy, choose_atk); //dmg **TO** enemy IN CHARACTER TURN
                        Battle_Mode(char, enemy, false); //RUNS ENEMY TURN
                        break;
                    }
            }
            break;
        case false:
            if (enemy.STATS.HP <= 0) {
                Battle_Mode(char, enemy, true);
            }
            else {
                Char_dmg(char, enemy); //dmg **TO** character
                Battle_Mode(char, enemy, true); //RUNS CHARACTER TURN
            }
            break;
    }
}
function Enemy_dmg(char, enemy, skill) {
    enemy.STATS.HP = -((char.EQ_DMG[skill - 1] + char.STATS.ATK) - enemy.STATS.DEF);
}
function Char_dmg(char, enemy) {
    var enemy_atk = Math.ceil(Math.random() * (2 - 1) + 1);
    if (char.STATS.DEF >= (enemy.EQ_DMG[enemy_atk - 1]) + enemy.STATS.ATK) {
        char.STATS.HP = 0;
    }
    else {
        char.STATS.HP = -((enemy.EQ_DMG[enemy_atk - 1]) + enemy.STATS.ATK) - char.STATS.DEF;
        alert("The enemy used: " + enemy.SKILL_SET[enemy_atk - 1] + ".\nHit you for " + (((enemy.EQ_DMG[enemy_atk - 1]) + enemy.STATS.ATK) - char.STATS.DEF) + "\n");
    }
}
function isLevelUp(char) {
    if (char.STATS.EXP >= char.STATS.EXP_LVUP) {
        char.STATS.LVL = 1;
        char.STATS.HP = 50;
        char.STATS.DEF = 10;
        char.STATS.ATK = 10;
        char.STATS.EXP = -(char.STATS.EXP);
        char.STATS.EXP_LVUP = 10;
        char.SKILL_POINTS = 5;
        return true;
    }
    else {
        return false;
    }
}
function Dungeon_Mode(char) {
    alert("Welcome to The Dungeon of Demons.\nHere the Five Great Demons of Hell are resting.\nBurst in and challenge each of them!\nEach Boss you kill - a 1000 Gold to you pocket.\nBeat the King of Hell to earn massive rewards!\n\n*If you die in Dungeon Mode, you will be transffered to Main Menu.\n\nGOOD LUCK\n");
    var boss1 = new Character("Dadrian, Guardian of Underworlds", new Race("Snakes from below", 150, "Demon's Roar", 170, "Demon"), new Class("Snakes from below", 150, "Demon's Roar", 170, "Flame Strike", 200, "Icy Niddles", 200, "Demon", "Wizard"), new Stats(700, 100, 100), new Item("Staff of Hell", "Staff", 200));
    var boss2 = new Character("Liliana, Controler of Demons", new Race("Summon the Dead", 200, "Dark Energy", 220, "Demon"), new Class("Summon the Dead", 200, "Dark energy ball", 220, "Slice and Slice", 270, "Hundred Swords of Doom", 270, "Demon", "Swordmaster"), new Stats(1000, 170, 250), new Item("Legendary Demon Sword", "Sword", 250));
    var boss3 = new Character("Ozzy, The Demon King", new Race("Black Lightning", 250, "Dark Pulses", 280, "Demon"), new Class("Black Lightning", 250, "Dark Pulses", 280, "Flames of Hell", 350, "Dark Fireball", 350, "Demon", "Wizard"), new Stats(1300, 200, 300), new Item("The Book of Doom", "Book", 200));
    var boss4 = new Character("Domri, King of The Dark Territory", new Race("Summon 100 Hell Hounds", 300, "Summon Dozens of Foul Demons", 320, "Demon"), new Class("Summon 100 Hell Hounds", 300, "Summon Dozens of Foul Demons", 320, "Ultra Speed Cut", 400, "Summon Thousand Swords", 450, "Demon", "Swordmaster"), new Stats(1700, 250, 300), new Item("Ancient DragonSlayer Sword", "Sword", 350));
    var boss5 = new Character("Lucifer, The Great", new Race("Summon Thousands of Gouls", 400, "Summon the Four Hoursemen", 350, "Demon"), new Class("Summon Thousands of Gouls", 400, "Summon the Four Hoursemen", 350, "Flame Slice", 500, "Summon Ice & Fire Swords", 550, "Demon", "Wizard Swordmaster"), new Stats(2000, 350, 450), new Item("Elemental Sword of Hell", "Sword", 500));
    for (var i = 1; i <= 5; i++) {
        var base_hp = char.STATS.HP;
        switch (i) {
            case 1:
                alert("Your first encounter is " + boss1.NAME + ".\n\nDefeat him to continue.");
                Battle_Mode(char, boss1, true);
                if (char.STATS.HP <= 0) {
                    alert("Lucky enough, in dungeon mode you dont really die..\n\nSo back to Main Menu!");
                    char.STATS.HP = -(char.STATS.HP);
                    char.STATS.HP = base_hp;
                    Main_menu(char);
                    break;
                }
                else {
                    char.STATS.HP = -(char.STATS.HP);
                    char.STATS.HP = base_hp;
                    char.GOLD = 1000;
                    alert("Nice Job! Let's move on!");
                    break;
                }
            case 2:
                alert("Your second encounter is " + boss2.NAME + ".\n\nDefeat her to continue.");
                Battle_Mode(char, boss2, true);
                if (char.STATS.HP <= 0) {
                    alert("Lucky enough, in dungeon mode you dont really die..\n\nSo back to Main Menu!");
                    char.STATS.HP = -(char.STATS.HP);
                    char.STATS.HP = base_hp;
                    Main_menu(char);
                    break;
                }
                else {
                    char.STATS.HP = -(char.STATS.HP);
                    char.STATS.HP = base_hp;
                    char.GOLD = 1000;
                    alert("Nice Job! On to the next one!");
                    break;
                }
            case 3:
                alert("Your third encounter is " + boss3.NAME + ".\n\nDefeat him to continue.");
                Battle_Mode(char, boss3, true);
                if (char.STATS.HP <= 0) {
                    alert("Lucky enough, in dungeon mode you dont really die..\n\nSo back to Main Menu!");
                    char.STATS.HP = -(char.STATS.HP);
                    char.STATS.HP = base_hp;
                    Main_menu(char);
                    break;
                }
                else {
                    char.STATS.HP = -(char.STATS.HP);
                    char.STATS.HP = base_hp;
                    char.GOLD = 1000;
                    alert("Great! It can get ugly from here on..");
                    break;
                }
            case 4:
                alert("Your fourth encounter is " + boss4.NAME + ".\n\nDefeat him to face The King of Hell!");
                Battle_Mode(char, boss4, true);
                if (char.STATS.HP <= 0) {
                    alert("Lucky enough, in dungeon mode you dont really die..\n\nSo back to Main Menu!");
                    char.STATS.HP = -(char.STATS.HP);
                    char.STATS.HP = base_hp;
                    Main_menu(char);
                    break;
                }
                else {
                    char.STATS.HP = -(char.STATS.HP);
                    char.STATS.HP = base_hp;
                    char.GOLD = 1000;
                    alert("Hell Yea!! Lucifer - Here We Come!");
                    break;
                }
            case 5:
                alert('"So... You are willing to challenge me."\n\nDefeat the devil to earn MASSIVE rewards!\n');
                Battle_Mode(char, boss5, true);
                if (char.STATS.HP <= 0) {
                    alert("Damn! So close!!\nLucky enough, in dungeon mode you dont really die..\n\nSo try your best next time\n\n");
                    char.STATS.HP = -(char.STATS.HP);
                    char.STATS.HP = base_hp;
                    Main_menu(char);
                    break;
                }
                else {
                    char.STATS.HP = -(char.STATS.HP);
                    char.STATS.HP = base_hp;
                    alert('"You have defeated me now.. But I will return!\nWe will meet again sooner then you think..."');
                    alert("It is done. You cleared the Dungeon of Demons!\n\nCheck your inventory, you got some surprises there.\n\nCome back whenever you feel like looting more goods.");
                    var loot = Math.round(Math.random() * (11 - 1) + 1);
                    var rand_gold = Math.round(Math.random() * (20000 - 10000) + 10000);
                    char.GOLD = rand_gold;
                    switch (loot) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            var loot1 = new Item("Demon Armor", "Armor", 500); //def
                            char.addItem(loot1);
                            alert("WOW! You got " + loot1.NAME + "!!\nAaaand.. " + rand_gold + " GOLD!!!\n\nCome again soon!\n");
                            break;
                        case 5:
                        case 6:
                        case 7:
                            var loot2 = new Item("Lucifer's Cloak", "Cloak", 350); //to all stats
                            char.addItem(loot2);
                            alert("WOW! You got " + loot2.NAME + "!!\nAaaand.. " + rand_gold + " GOLD!!!\n\nCome again soon!\n");
                            break;
                        case 8:
                        case 9:
                            var loot3_1 = new Item("Lucifer's Ring", "Ring", 350); //to all stats
                            var loot3_2 = new Item("Dardrian's Ring", "Ring", 250); //to all stats
                            char.addItem(loot3_1);
                            char.addItem(loot3_2);
                            alert("Nice Nice Nice! Two birds with one rock!\nYou got " + loot3_1.NAME + " And " + loot3_2.NAME + "!!!\nAaaand.. " + rand_gold + " GOLD!!!\n\nCome again soon!\n");
                            break;
                        case 10:
                            switch (char.CL.SPEC) {
                                case "Swordmaster":
                                    var sword_loot = new Item("Lucifer's Sword", "Sword", 450);
                                    char.addItem(sword_loot);
                                    alert("WOW!!! You got " + sword_loot.NAME + " itself!!\nPretty darn lucky!\nAaaand.. " + rand_gold + " GOLD!!!\n\nCome again soon!\n");
                                    break;
                                case "Wizard":
                                    var staff_loot = new Item("The Book of Doom", "Book", 500);
                                    char.addItem(staff_loot);
                                    alert("WOW!!! You got " + staff_loot.NAME + "! The rarest of books!\nAaaand.. " + rand_gold + " GOLD!!!\n\nCome again soon!\n");
                                    break;
                                case "DragonSlayer":
                                    var wings_loot = new Item("Liliana's Wings", "Wings", 400); //to all stats
                                    char.addItem(wings_loot);
                                    alert("WOW!!! You got " + wings_loot.NAME + "! Pretty darn usefull!!\nAaaaand.. " + rand_gold + " GOLD!!!\n\nCome again soon!\n");
                                    break;
                            }
                            break;
                        case 11:
                            var demon_ring = new Item("Ancient Demon Ring", "Ring", 350); //to all stats
                            //let companion: Item = new Item("Cute Imp", "Pet", 200);//to all stats
                            char.addItem(demon_ring);
                            //char.addItem(companion);// NEED TO BE REPLACED TO equipCompanion()
                            alert("WOW!!! You got " + demon_ring.NAME + "!!\nAaaaand.. " + rand_gold + " GOLD!!!\n\nCome again soon!\n");
                            break;
                    }
                    break;
                }
        }
    }
}
//# sourceMappingURL=app.js.map