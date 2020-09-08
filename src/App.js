import React from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./App.css";

const STATS_PER_LEVEL = {
  knight: {
    stamina: 3,
    dexterity: 1,
    strength: 2,
    intelligence: 1,
    wisdom: 2,
  },
  warrior: {
    stamina: 2,
    dexterity: 2,
    strength: 3,
    intelligence: 1,
    wisdom: 1,
  },
  rogue: {
    stamina: 1.75,
    dexterity: 3,
    strength: 1.75,
    intelligence: 1.5,
    wisdom: 1,
  },
  scout: {
    stamina: 1.75,
    dexterity: 3,
    strength: 1.5,
    intelligence: 1.75,
    wisdom: 1,
  },
  mage: {
    stamina: 1.5,
    dexterity: 1.5,
    strength: 1,
    intelligence: 3,
    wisdom: 2,
  },
  priest: {
    stamina: 2,
    dexterity: 1,
    strength: 1,
    intelligence: 2,
    wisdom: 3,
  },
  samurai: {
    stamina: 3,
    dexterity: 1,
    strength: 3,
    intelligence: 1,
    wisdom: 1,
  },
  ninja: {
    stamina: 2,
    dexterity: 3,
    strength: 1.5,
    intelligence: 1.5,
    wisdom: 1,
  },
  summoner: {
    stamina: 1,
    dexterity: 2,
    strength: 1,
    intelligence: 3,
    wisdom: 2,
  },
};

const SKILLS = {
  knight: [
    { name: "Defenisve Stance", secondary: true, level: 1 },
    { name: "Bound Shield", secondary: false, level: 2 },
    { name: "Heavy Metal", secondary: false, level: 5 },
    { name: "Shield Bash", secondary: false, level: 10 },
    { name: "Taunt", secondary: true, level: 15 },
    { name: "Parry", secondary: true, level: 20 },
    { name: "Retaliate", secondary: true, level: 25 },
    { name: "Charge", secondary: false, level: 30 },
    { name: "Immovable", secondary: false, level: 35 },
  ],
  warrior: [
    { name: "Deliberate Strike", secondary: true, level: 1 },
    { name: "Expose Breach", secondary: true, level: 2 },
    { name: "Onslaught", secondary: false, level: 5 },
    { name: "Charge", secondary: false, level: 10 },
    { name: "Axe Mastry", secondary: true, level: 15 },
    { name: "Cleave", secondary: true, level: 20 },
    { name: "Taunt", secondary: false, level: 25 },
    { name: "Bellow", secondary: false, level: 30 },
    { name: "Cyclone Whirl", secondary: false, level: 35 },
    { name: "Berserk", secondary: false, level: 40 },
  ],
  scout: [
    { name: "Uncanny Aim", secondary: true, level: 1 },
    { name: "Blood Arrow", secondary: true, level: 2 },
    { name: "Quadruple Arrow", secondary: false, level: 5 },
    { name: "Snipe", secondary: false, level: 10 },
    { name: "Mana Leech Arrow", secondary: false, level: 15 },
    { name: "Eagle Eye", secondary: true, level: 20 },
    { name: "Bandage Wounds", secondary: true, level: 25 },
    { name: "Rain Arrows", secondary: false, level: 30 },
  ],
  rogue: [
    { name: "Dual Proficiency", secondary: true, level: 1 },
    { name: "Bleeding Slash", secondary: true, level: 2 },
    { name: "Stealth", secondary: false, level: 5 },
    { name: "Backstab", secondary: false, level: 10 },
    { name: "Shadowbind", secondary: false, level: 15 },
    { name: "Shadowstep", secondary: false, level: 20 },
    { name: "Disengage", secondary: true, level: 25 },
    { name: "Treasure Hunter", secondary: true, level: 30 },
  ],
  mage: [
    { name: "Spark", secondary: true, level: 1 },
    { name: "Jolt", secondary: true, level: 2 },
    { name: "Wind or Fire Mastry", secondary: true, level: 5 },
    { name: "Firebolt", secondary: true, level: 10 },
    { name: "Thunderbolt", secondary: true, level: 15 },
    { name: "Fire bomb", secondary: false, level: 20 },
    { name: "Redirect Ligtning", secondary: false, level: 25 },
    { name: "Flame's Wrath", secondary: false, level: 30 },
    { name: "Windstorm", secondary: false, level: 35 },
    { name: "Wind or Fire Mastery", secondary: false, level: 40 },
    { name: "Silence", secondary: false, level: 45 },
  ],
  priest: [
    { name: "Riptide", secondary: true, level: 1 },
    { name: "Regenerate", secondary: true, level: 2 },
    { name: "Urgent Heal", secondary: true, level: 5 },
    { name: "Potent Heal", secondary: false, level: 10 },
    { name: "Bone Chill", secondary: true, level: 15 },
    { name: "Group Heal", secondary: false, level: 20 },
    { name: "Cleanse", secondary: false, level: 25 },
    { name: "Restore Limb", secondary: false, level: 30 },
  ],
  samurai: [
    { name: "Undecided", secondary: false, level: 1 },
    { name: "Quickdraw (lunge)", secondary: true, level: 2 },
    { name: "Deflect", secondary: true, level: 5 },
    { name: "Undecided", secondary: false, level: 10 },
    { name: "Reflect", secondary: true, level: 15 },
    { name: "Undecided", secondary: false, level: 20 },
    { name: "Undecided", secondary: false, level: 25 },
    { name: "Undecided", secondary: false, level: 30 },
  ],
  ninja: [
    { name: "Scale Wall", secondary: true, level: 1 },
    { name: "Kunai Fan", secondary: true, level: 2 },
    { name: "Silent Movement", secondary: true, level: 5 },
    { name: "Undecided", secondary: false, level: 10 },
    { name: "Undecided", secondary: false, level: 15 },
    { name: "Undecided", secondary: false, level: 20 },
    { name: "Undecided", secondary: false, level: 25 },
    { name: "Undecided", secondary: false, level: 30 },
  ],
  summoner: [
    { name: "Ether Sight", secondary: true, level: 1 },
    { name: "Ether Bolt", secondary: false, level: 2 },
    { name: "Learn Spirit or Learn Skill", secondary: true, level: 5 },
    { name: "Mana Efficiency", secondary: false, level: 10 },
    { name: "Increased Capacity", secondary: true, level: 15 },
    { name: "Banish Construct", secondary: false, level: 20 },
    { name: "Repair Construct", secondary: false, level: 25 },
    { name: "Pilot Construct", secondary: false, level: 30 },
  ],
};

const EXP_REQUIREMENTS = [
  "180",
  "216",
  "259",
  "311",
  "373",
  "448",
  "538",
  "646",
  "775",
  "930",
  "1,116",
  "1,339",
  "1,607",
  "1,928",
  "2,314",
  "2,777",
  "3,332",
  "3,998",
  "4,798",
  "5,758",
  "6,910",
  "8,292",
  "9,950",
  "11,940",
  "14,328",
  "17,194",
  "20,633",
  "24,760",
  "29,712",
  "35,654",
  "42,785",
  "51,342",
  "61,610",
  "73,932",
  "88,718",
  "106,462",
  "127,754",
  "153,305",
  "183,966",
  "220,759",
  "264,911",
  "317,893",
  "381,472",
  "457,766",
  "549,319",
  "659,183",
  "791,020",
  "949,224",
  "1,139,069",
  "5,000,000",
  "5,250,000",
  "5,512,500",
  "5,788,125",
  "6,077,531",
  "6,381,408",
  "6,700,478",
  "7,035,502",
  "7,387,277",
  "7,756,641",
  "8,144,473",
  "8,551,697",
  "8,979,282",
  "9,428,246",
  "9,899,658",
  "10,394,641",
  "10,914,373",
  "11,460,092",
  "12,033,097",
  "12,634,752",
  "13,266,490",
  "13,929,815",
  "14,626,306",
  "15,357,621",
  "16,125,502",
  "16,931,777",
  "17,778,366",
  "18,667,284",
  "19,600,648",
  "20,580,680",
  "21,609,714",
  "22,690,200",
  "23,824,710",
  "25,015,946",
  "26,266,743",
  "27,580,080",
  "28,959,084",
  "30,407,038",
  "31,927,390",
  "33,523,760",
  "35,199,948",
  "36,959,945",
  "38,807,942",
  "40,748,339",
  "42,785,756",
  "44,925,044",
  "47,171,296",
  "49,529,861",
  "52,006,354",
  "54,606,672",
  "57,337,006",
];

const App = () => {
  const [primClass, setPrimClass] = React.useState(null);
  const [primLvl, setPrimLvl] = React.useState(0);
  const [secClass, setSecClass] = React.useState(null);
  const [secLvl, setSecLvl] = React.useState(0);
  const [stamBonus, setStamBonus] = React.useState(0);
  const [dexBonus, setDexBonus] = React.useState(0);
  const [strBonus, setStrBonus] = React.useState(0);
  const [intBonus, setIntBonus] = React.useState(0);
  const [wisBonus, setWisBonus] = React.useState(0);
  const [results, setResults] = React.useState("");
  const [snapshot, setSnapshot] = React.useState("");
  const [formattedSheet, setFormattedSheet] = React.useState("");
  const [userEnteredSnapshot, setUserEnteredSnapshot] = React.useState("");

  React.useState(() => {
    setResults("");
  }, [
    primClass,
    primLvl,
    secClass,
    secLvl,
    stamBonus,
    dexBonus,
    strBonus,
    intBonus,
    wisBonus,
  ]);

  const calcSingleStat = (statName) => {
    if (!secLvl) {
      return primLvl * STATS_PER_LEVEL[primClass][statName];
    } else {
      return (
        primLvl *
        Math.max(
          STATS_PER_LEVEL[primClass][statName],
          (STATS_PER_LEVEL[primClass][statName] +
            STATS_PER_LEVEL[secClass][statName]) /
            2
        )
      );
    }
  };

  const reset = () => {
    setPrimClass(null);
    setPrimLvl(0);
    setSecClass(null);
    setSecLvl(0);
    setStamBonus(0);
    setDexBonus(0);
    setStrBonus(0);
    setIntBonus(0);
    setWisBonus(0);
    setResults("");
    setSnapshot("");
  };

  const createSnapshot = () => {
    const b64 = btoa(
      JSON.stringify({
        pc: primClass,
        pl: primLvl,
        sc: secClass,
        sl: secLvl,
        asta: stamBonus,
        adex: dexBonus,
        astr: strBonus,
        aint: intBonus,
        awis: wisBonus,
      })
    );
    const spaced = b64
      .split("")
      .reduce(
        (acc, currChar) => {
          if (acc[acc.length - 1].length < 4) {
            acc[acc.length - 1] += currChar;
            return acc;
          }
          acc.push(currChar);
          return acc;
        },
        [""]
      )
      .join(" ");

    return spaced;
  };

  const capFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const createFormattedSheet = (results) => {
    /*
  
Seth
Main Class: Level 48 Warrior (659,430/949,224)
Second Class: None
1,728/1,728 Health Points
0/100 Fury Points
Factions: Adventurers’ Guild
Stamina: 96
Dexterity: 100 (96 + 4)
Strength: 171 (144 + 27) 
Intelligence: 48
Wisdom: 48

    */
    const classesWithMana = ["knight", "mage", "priest", "summoner"];
    const classesWithFury = ["warrior"];
    const classesWithConcentration = ["rogue", "scout", "ninja", "samurai"];

    const sheet =
      `Main Class: Level ${primLvl} ${capFirst(primClass)} (?/${
        results.primExpToNextLevel
      })\n` +
      (secClass && secLvl
        ? `Second Class: Level ${secLvl} ${capFirst(secClass)} (?/${
            results.secExpToNextLevel
          })\n`
        : "Second Class: None\n") +
      `${results.derivedStats.hp}/${results.derivedStats.hp} Health Points\n` +
      (classesWithMana.indexOf(primClass) > -1 ||
      classesWithMana.indexOf(secClass) > -1
        ? `${results.derivedStats.mp}/${results.derivedStats.mp} Mana Points\n`
        : ``) +
      (classesWithFury.indexOf(primClass) > -1 ||
      classesWithFury.indexOf(secClass) > -1
        ? `0/100 Fury Points\n`
        : ``) +
      (classesWithConcentration.indexOf(primClass) > -1 ||
      classesWithConcentration.indexOf(secClass) > -1
        ? `100/100 Concentration Points\n`
        : ``) +
      "Factions: ?\n" +
      `Stamina: ${results.stats.stamina}\n` +
      `Dexterity: ${results.stats.dexterity}\n` +
      `Strength: ${results.stats.strength}\n` +
      `Intelligence: ${results.stats.intelligence}\n` +
      `Wisdom: ${results.stats.wisdom}\n`;

    console.log(sheet);
    return sheet;
  };

  const interpretSnapshot = () => {
    const cleaned = userEnteredSnapshot.replace(/\s/g, "").replace(/"/g, "");
    const obj = JSON.parse(atob(cleaned));
    setPrimClass(obj.pc);
    setPrimLvl(obj.pl);
    setSecClass(obj.sc);
    setSecLvl(obj.sl);
    setStamBonus(obj.asta);
    setDexBonus(obj.adex);
    setStrBonus(obj.astr);
    setIntBonus(obj.aint);
    setWisBonus(obj.awis);
  };

  const calc = () => {
    const stats = {
      stamina: calcSingleStat("stamina") + parseInt(stamBonus),
      dexterity: calcSingleStat("dexterity") + parseInt(dexBonus),
      strength: calcSingleStat("strength") + parseInt(strBonus),
      intelligence: calcSingleStat("intelligence") + parseInt(intBonus),
      wisdom: calcSingleStat("wisdom") + parseInt(wisBonus),
    };

    console.log(stats);

    const derivedStats = {
      hp: 18 * stats.stamina,
      mp: 18 * stats.wisdom,
      pattk:
        primClass === "rogue" || primClass === "scout"
          ? 8 * stats.dexterity + 4 * stats.strength
          : 8 * stats.strength + 4 * stats.dexterity,
      pdef: 12 * stats.stamina,
      mattk: 13 * stats.intelligence,
      mdef: 12 * stats.wisdom,
    };
    console.log(derivedStats);

    const skills = {
      primary: SKILLS[primClass]
        .filter((skill) => skill.level <= primLvl)
        .map((skill) => skill.name),
      secondary: secClass
        ? SKILLS[secClass]
            .filter((skill) => skill.level <= secLvl && skill.secondary)
            .map((skill) => skill.name)
        : [],
    };

    const results = {
      stats,
      derivedStats,
      skills,
      primExpToNextLevel:
        primLvl < 101
          ? EXP_REQUIREMENTS[primLvl - 1]
          : "not calculated this high yet, need math here",
      ...(secLvl
        ? {
            secExpToNextLevel:
              secLvl < 101
                ? EXP_REQUIREMENTS[secLvl - 1]
                : "not calculated this high yet, need math here",
          }
        : {}),
    };

    setResults({
      ...results,
    });

    setFormattedSheet(createFormattedSheet(results));

    setSnapshot(createSnapshot());
  };

  return (
    <>
      <div className="header">Morgenheim Stat Calculator</div>
      <div className="left">
        <p>Enter classes & levels</p>
        <FormControl className="outerFormControl">
          <Select
            value={primClass}
            onChange={(e) => {
              setPrimClass(e.target.value);
            }}
          >
            <MenuItem></MenuItem>
            {Object.keys(STATS_PER_LEVEL).map((cl) => (
              <MenuItem value={cl}>{cl}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Primary Class</FormHelperText>
        </FormControl>
        <FormControl className="outerFormControl">
          <TextField
            type="number"
            value={primLvl}
            onChange={(e) => setPrimLvl(e.target.value)}
          ></TextField>
          <FormHelperText>Primary Level</FormHelperText>
        </FormControl>
        <FormControl className="outerFormControl">
          <Select
            onChange={(e) => {
              setSecClass(e.target.value);
            }}
            value={secClass}
          >
            <MenuItem></MenuItem>
            {Object.keys(STATS_PER_LEVEL)
              .filter((cl) => cl !== primClass)
              .map((cl) => (
                <MenuItem value={cl}>{cl}</MenuItem>
              ))}
          </Select>
          <FormHelperText>Secondary Class</FormHelperText>
        </FormControl>
        <FormControl className="outerFormControl">
          <TextField
            type="number"
            value={secLvl}
            onChange={(e) => setSecLvl(e.target.value)}
          ></TextField>
          <FormHelperText>Secondary Level</FormHelperText>
        </FormControl>
        <p>Enter any stat bonuses from armor</p>
        <FormControl className="outerFormControl">
          <TextField
            type="number"
            value={stamBonus}
            onChange={(e) => setStamBonus(e.target.value)}
          ></TextField>
          <FormHelperText>Stamina</FormHelperText>
        </FormControl>
        <FormControl className="outerFormControl">
          <TextField
            type="number"
            value={dexBonus}
            onChange={(e) => setDexBonus(e.target.value)}
          ></TextField>
          <FormHelperText>Dexterity</FormHelperText>
        </FormControl>
        <FormControl className="outerFormControl">
          <TextField
            type="number"
            value={strBonus}
            onChange={(e) => setStrBonus(e.target.value)}
          ></TextField>
          <FormHelperText>Strength</FormHelperText>
        </FormControl>
        <FormControl className="outerFormControl">
          <TextField
            type="number"
            value={intBonus}
            onChange={(e) => setIntBonus(e.target.value)}
          ></TextField>
          <FormHelperText>Intelligence</FormHelperText>
        </FormControl>
        <FormControl className="outerFormControl">
          <TextField
            type="number"
            value={wisBonus}
            onChange={(e) => setWisBonus(e.target.value)}
          ></TextField>
          <FormHelperText>Wisdom</FormHelperText>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          className="submit"
          disabled={!primClass || !primLvl}
          onClick={calc}
        >
          Calculate Stats
        </Button>
        <Button onClick={reset}>Reset</Button>
        <p>Load saved stat snapshot</p>
        <textarea
          value={userEnteredSnapshot}
          onChange={(e) => {
            setUserEnteredSnapshot(e.target.value);
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={interpretSnapshot}
          disabled={!userEnteredSnapshot || !userEnteredSnapshot.length}
        >
          Interpret Snapshot
        </Button>
      </div>
      <div className="right">
        <div>
          <p>Stats:</p>
          <pre className="results">{JSON.stringify(results, null, 4)}</pre>
        </div>
        <div>
          <p>Snapshot:</p> <textarea value={snapshot} />
          <p>Formatted Sheet:</p> <textarea value={formattedSheet} />
        </div>
      </div>
    </>
  );
};

export default App;
