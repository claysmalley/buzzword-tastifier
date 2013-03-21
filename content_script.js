walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bbig data\b/g, "cake");
	v = v.replace(/\bBig data\b/g, "Cake");
	v = v.replace(/\bbig Data\b/g, "cake");
	v = v.replace(/\bBig Data\b/g, "Cake");
	v = v.replace(/\bcloud\b/g, "candy");
	v = v.replace(/\bCloud\b/g, "Candy");
	v = v.replace(/\bshark tank\b/g, "cookie");
	v = v.replace(/\bShark tank\b/g, "Cookie");
	v = v.replace(/\bshark tanks\b/g, "cookies");
	v = v.replace(/\bShark tanks\b/g, "Cookies");
	v = v.replace(/\bsoftware-as-a-service\b/g, "biscuit");
	v = v.replace(/\bSoftware-as-a-service\b/g, "Biscuit");
	v = v.replace(/\bSoftware-as-a-Service\b/g, "Biscuit");
	v = v.replace(/\bsoftware as a service\b/g, "biscuit");
	v = v.replace(/\bSoftware as a service\b/g, "Biscuit");
	v = v.replace(/\bSoftware as a Service\b/g, "Biscuit");
	v = v.replace(/\bperfect storm\b/g, "popsicle");
	v = v.replace(/\bPerfect storm\b/g, "Popsicle");
	v = v.replace(/\bblue ocean\b/g, "tart");
	v = v.replace(/\bBlue ocean\b/g, "Tart");
	v = v.replace(/\brockstar\b/g, "pastry");
	v = v.replace(/\bRockstar\b/g, "Pastry");
	v = v.replace(/\brockstars\b/g, "pastries");
	v = v.replace(/\bRockstars\b/g, "Pastries");
	v = v.replace(/\brock star\b/g, "pastry");
	v = v.replace(/\bRock star\b/g, "Pastry");
	v = v.replace(/\brock stars\b/g, "pastries");
	v = v.replace(/\bRock stars\b/g, "Pastries");
	v = v.replace(/\bninja\b/g, "doughnut");
	v = v.replace(/\bNinja\b/g, "Doughnut");
	v = v.replace(/\bninjas\b/g, "doughnuts");
	v = v.replace(/\bNinjas\b/g, "Doughnuts");
	v = v.replace(/\bwizard\b/g, "pie");
	v = v.replace(/\bWizard\b/g, "Pie");
	v = v.replace(/\bwizards\b/g, "pies");
	v = v.replace(/\bWizards\b/g, "Pies");
	v = v.replace(/\bevangelist\b/g, "cupcake");
	v = v.replace(/\bEvangelist\b/g, "Cupcake");
	v = v.replace(/\bevangelists\b/g, "cupcakes");
	v = v.replace(/\bEvangelists\b/g, "Cupcakes");
	v = v.replace(/\bguru\b/g, "brownie");
	v = v.replace(/\bGuru\b/g, "Brownie");
	v = v.replace(/\bgurus\b/g, "brownies");
	v = v.replace(/\bGurus\b/g, "Brownies");
	v = v.replace(/\bhockey stick\b/g, "bagel");
	v = v.replace(/\bHockey stick\b/g, "Bagel");
	v = v.replace(/\bhockey sticks\b/g, "bagels");
	v = v.replace(/\bHockey sticks\b/g, "Bagels");
	v = v.replace(/\bparadigm\b/g, "waffle");
	v = v.replace(/\bParadigm\b/g, "Waffle");
	v = v.replace(/\bparadigms\b/g, "waffles");
	v = v.replace(/\bParadigms\b/g, "Waffles");
	v = v.replace(/\bsynergy\b/g, "hotcake");
	v = v.replace(/\bSynergy\b/g, "Hotcake");
	v = v.replace(/\bsynergies\b/g, "hotcakes");
	v = v.replace(/\bSynergies\b/g, "Hotcakes");
	v = v.replace(/\bagile development\b/g, "ice cream");
	v = v.replace(/\bAgile development\b/g, "Ice cream");
	v = v.replace(/\bagile Development\b/g, "ice cream");
	v = v.replace(/\bAgile Development\b/g, "Ice cream");
	v = v.replace(/\bsocial media\b/g, "pancake");
	v = v.replace(/\bSocial media\b/g, "Pancake");
	v = v.replace(/\bsocial Media\b/g, "pancake");
	v = v.replace(/\bSocial Media\b/g, "Pancake");
	v = v.replace(/\bgame-changer\b/g, "eclair");
	v = v.replace(/\bGame-changer\b/g, "Eclair");
	v = v.replace(/\bgame-changers\b/g, "eclairs");
	v = v.replace(/\bGame-changers\b/g, "Eclairs");
	v = v.replace(/\bgame changer\b/g, "eclair");
	v = v.replace(/\bGame changer\b/g, "Eclair");
	v = v.replace(/\bgame changers\b/g, "eclairs");
	v = v.replace(/\bGame changers\b/g, "Eclairs");
	v = v.replace(/\bangel investor\b/g, "danish");
	v = v.replace(/\bAngel investor\b/g, "Danish");
	v = v.replace(/\bangel investors\b/g, "danishes");
	v = v.replace(/\bAngel investors\b/g, "Danishes");
	v = v.replace(/\bhackathon\b/g, "flapjack");
	v = v.replace(/\bHackathon\b/g, "Flapjack");
	v = v.replace(/\bhackathons\b/g, "flapjacks");
	v = v.replace(/\bHackathons\b/g, "Flapjacks");
	v = v.replace(/\bthought leadership\b/g, "strudel");
	v = v.replace(/\bThought leadership\b/g, "Strudel");
	v = v.replace(/\bhelicopter view\b/g, "sherbet");
	v = v.replace(/\bHelicopter view\b/g, "Sherbet");
	v = v.replace(/\btechnologies\b/g, "fritters");
	v = v.replace(/\bTechnologies\b/g, "Fritters");
	v = v.replace(/\bgamify\b/g, "ingest");
	v = v.replace(/\bGamify\b/g, "Ingest");
	v = v.replace(/\bgamified\b/g, "ingested");
	v = v.replace(/\bGamified\b/g, "Ingested");
	v = v.replace(/\bgamifying\b/g, "ingesting");
	v = v.replace(/\bGamifying\b/g, "Ingesting");
	v = v.replace(/\bgamification\b/g, "ingestion");
	v = v.replace(/\bGamification\b/g, "Ingestion");
	v = v.replace(/\binnovate\b/g, "taste");
	v = v.replace(/\bInnovate\b/g, "Taste");
	v = v.replace(/\binnovated\b/g, "tasted");
	v = v.replace(/\bInnovated\b/g, "Tasted");
	v = v.replace(/\binnovating\b/g, "tasting");
	v = v.replace(/\bInnovating\b/g, "Tasting");
	v = v.replace(/\binnovation\b/g, "taste");
	v = v.replace(/\bInnovation\b/g, "Taste");
	v = v.replace(/\bcircle back\b/g, "eat");
	v = v.replace(/\bCircle back\b/g, "Eat");
	v = v.replace(/\bcircled back\b/g, "ate");
	v = v.replace(/\bCircled back\b/g, "Ate");
	v = v.replace(/\bcircling back\b/g, "eating");
	v = v.replace(/\bCircling back\b/g, "Eating");
	v = v.replace(/\bdouble down on\b/g, "swallow");
	v = v.replace(/\bDouble down on\b/g, "Swallow");
	v = v.replace(/\bdoubled down on\b/g, "swallowed");
	v = v.replace(/\bDoubled down on\b/g, "Swallowed");
	v = v.replace(/\bdoubling down on\b/g, "swallowing");
	v = v.replace(/\bDoubling down on\b/g, "Swallowing");
	v = v.replace(/\breintermediate\b/g, "enjoy");
	v = v.replace(/\bReintermediate\b/g, "Enjoy");
	v = v.replace(/\breintermediated\b/g, "enjoyed");
	v = v.replace(/\bReintermediated\b/g, "Enjoyed");
	v = v.replace(/\breintermediating\b/g, "enjoying");
	v = v.replace(/\bReintermediating\b/g, "Enjoying");
	v = v.replace(/\breintermediation\b/g, "enjoyment");
	v = v.replace(/\bReintermediation\b/g, "Enjoyment");
	v = v.replace(/\bpivot\b/g, "nibble");
	v = v.replace(/\bPivot\b/g, "Nibble");
	v = v.replace(/\bpivoted\b/g, "nibbled");
	v = v.replace(/\bPivoted\b/g, "Nibbled");
	v = v.replace(/\bpivoting\b/g, "nibbling");
	v = v.replace(/\bPivoting\b/g, "Nibbling");
	v = v.replace(/\bthink outside the box\b/g, "have a bite");
	v = v.replace(/\bThink outside the box\b/g, "Have a bite");
	v = v.replace(/\bthought outside the box\b/g, "had a bite");
	v = v.replace(/\bThought outside the box\b/g, "Had a bite");
	v = v.replace(/\bthinking outside the box\b/g, "having a bite");
	v = v.replace(/\bThinking outside the box\b/g, "Having a bite");
	v = v.replace(/\bmicroblog\b/g, "gobble up");
	v = v.replace(/\bMicroblog\b/g, "Gobble up");
	v = v.replace(/\bmicroblogged\b/g, "gobbled up");
	v = v.replace(/\bMicroblogged\b/g, "Gobbled up");
	v = v.replace(/\bmicroblogging\b/g, "gobbling up");
	v = v.replace(/\bMicroblogging\b/g, "Gobbling up");
	v = v.replace(/\bsynergize\b/g, "munch");
	v = v.replace(/\bSynergize\b/g, "Munch");
	v = v.replace(/\bsynergized\b/g, "munched");
	v = v.replace(/\bSynergized\b/g, "Munched");
	v = v.replace(/\bsynergizing\b/g, "munching");
	v = v.replace(/\bSynergizing\b/g, "Munching");
	v = v.replace(/\bpush the envelope\b/g, "take a bite");
	v = v.replace(/\bPush the envelope\b/g, "Take a bite");
	v = v.replace(/\bpushed the envelope\b/g, "took a bite");
	v = v.replace(/\bPushed the envelope\b/g, "Took a bite");
	v = v.replace(/\bpushing the envelope\b/g, "taking a bite");
	v = v.replace(/\bPushing the envelope\b/g, "Taking a bite");
	v = v.replace(/\blean\b/g, "delectable");
	v = v.replace(/\bLean\b/g, "Delectable");
	v = v.replace(/\bfreemium\b/g, "savory");
	v = v.replace(/\bFreemium\b/g, "Savory");
	v = v.replace(/\bsocial\b/g, "delicious");
	v = v.replace(/\bSocial\b/g, "Delicious");
	v = v.replace(/\bleading-edge\b/g, "chewy");
	v = v.replace(/\bLeading-edge\b/g, "Chewy");
	v = v.replace(/\bleading edge\b/g, "chewy");
	v = v.replace(/\bLeading edge\b/g, "Chewy");
	v = v.replace(/\bbleeding-edge\b/g, "chewy");
	v = v.replace(/\bBleeding-edge\b/g, "Chewy");
	v = v.replace(/\bbleeding edge\b/g, "chewy");
	v = v.replace(/\bBleeding edge\b/g, "Chewy");
	v = v.replace(/\bcutting-edge\b/g, "chewy");
	v = v.replace(/\bCutting-edge\b/g, "Chewy");
	v = v.replace(/\bcutting edge\b/g, "chewy");
	v = v.replace(/\bCutting edge\b/g, "Chewy");
	v = v.replace(/\bdelayered\b/g, "yummy");
	v = v.replace(/\bDelayered\b/g, "Yummy");
	v = v.replace(/\bscalable\b/g, "tasty");
	v = v.replace(/\bScalable\b/g, "Tasty");
	v = v.replace(/\binnovative\b/g, "chocolatey");
	v = v.replace(/\bInnovative\b/g, "Chocolatey");
	v = v.replace(/\bdynamic\b/g, "sugary");
	v = v.replace(/\bDynamic\b/g, "Sugary");
	v = v.replace(/\bnext-generation\b/g, "sugary");
	v = v.replace(/\bNext-generation\b/g, "Sugary");
	v = v.replace(/\bnext generation\b/g, "sugary");
	v = v.replace(/\bNext generation\b/g, "Sugary");
	v = v.replace(/\brevolutionary\b/g, "scrumptious");
	v = v.replace(/\bRevolutionary\b/g, "Scrumptious");
	v = v.replace(/\bviral\b/g, "creamy");
	v = v.replace(/\bViral\b/g, "Creamy");
	v = v.replace(/\bubiquitous\b/g, "flavorful");
	v = v.replace(/\bUbiquitous\b/g, "Flavorful");
	v = v.replace(/\bwin-win\b/g, "succulent");
	v = v.replace(/\bWin-win\b/g, "Succulent");
	v = v.replace(/\bepic\b/g, "mouth-watering");
	v = v.replace(/\bEpic\b/g, "Mouth-watering");
	v = v.replace(/\bLindsay Lohan\b/g, "out-of-control gerbil");

	textNode.nodeValue = v;
}
