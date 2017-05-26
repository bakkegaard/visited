//data from https://github.com/olahol/iso-3166-2.json
let translate = {
	"Afghanistan" : "af" ,
	"Albania" : "al" ,
	"Algeria" : "dz" ,
	"American Samoa" : "as" ,
	"Andorra" : "ad" ,
	"Angola" : "ao" ,
	"Anguilla" : "ai" ,
	"Antarctica" : "aq" ,
	"Antigua & Barbuda" : "ag" ,
	"Argentina" : "ar" ,
	"Armenia" : "am" ,
	"Aruba" : "aw" ,
	"Australia" : "au" ,
	"Austria" : "at" ,
	"Azerbaijan" : "az" ,
	"Bahamas" : "bs" ,
	"Bahrain" : "bh" ,
	"Bangladesh" : "bd" ,
	"Barbados" : "bb" ,
	"Belarus" : "by" ,
	"Belgium" : "be" ,
	"Belize" : "bz" ,
	"Benin" : "bj" ,
	"Bermuda" : "bm" ,
	"Bhutan" : "bt" ,
	"Bolivia" : "bo" ,
	"Bosnia & Herzegovina" : "ba" ,
	"Botswana" : "bw" ,
	"Bouvet Island" : "bv" ,
	"Brazil" : "br" ,
	"British Indian Ocean Territory" : "io" ,
	"Brunei Darussalam" : "bn" ,
	"Bulgaria" : "bg" ,
	"Burkina Faso" : "bf" ,
	"Burundi" : "bi" ,
	"Cambodia" : "kh" ,
	"Cameroon" : "cm" ,
	"Canada" : "ca" ,
	"Cape Verde" : "cv" ,
	"Cayman Islands" : "ky" ,
	"Central African Republic" : "cf" ,
	"Chad" : "td" ,
	"Chile" : "cl" ,
	"China" : "cn" ,
	"Christmas Island" : "cx" ,
	"Cocos (Keeling) Islands" : "cc" ,
	"Colombia" : "co" ,
	"Comoros" : "km" ,
	"Congo" : "cg" ,
	"Zaire" : "cd" ,
	"Cook Islands" : "ck" ,
	"Costa Rica" : "cr" ,
	"Cote D'ivoire (Ivory Coast)" : "ci" ,
	"Croatia (Hrvatska)" : "hr" ,
	"Cuba" : "cu" ,
	"Cyprus" : "cy" ,
	"Czech Republic" : "cz" ,
	"Denmark" : "dk" ,
	"Djibouti" : "dj" ,
	"Dominica" : "dm" ,
	"Dominican Republic" : "do" ,
	"East Timor" : "tp" ,
	"Ecuador" : "ec" ,
	"Egypt" : "eg" ,
	"El Salvador" : "sv" ,
	"Equatorial Guinea" : "gq" ,
	"Eritrea" : "er" ,
	"Estonia" : "ee" ,
	"Ethiopia" : "et" ,
	"Falkland Islands (Malvinas)" : "fk" ,
	"Faroe Islands" : "fo" ,
	"Fiji" : "fj" ,
	"Finland" : "fi" ,
	"France" : "fr" ,
	"French Guiana" : "gf" ,
	"French Polynesia" : "pf" ,
	"French Southern Territories" : "tf" ,
	"Gabon" : "ga" ,
	"Gambia" : "gm" ,
	"Georgia" : "ge" ,
	"Germany" : "de" ,
	"Ghana" : "gh" ,
	"Gibraltar" : "gi" ,
	"United Kingdom" : "gb" ,
	"Greece" : "gr" ,
	"Greenland" : "gl" ,
	"Grenada" : "gd" ,
	"Guadeloupe" : "gp" ,
	"Guam" : "gu" ,
	"Guatemala" : "gt" ,
	"Guinea" : "gn" ,
	"Guinea-Bissau" : "gw" ,
	"Guyana" : "gy" ,
	"Haiti" : "ht" ,
	"Heard & McDonald Islands" : "hm" ,
	"Vatican City (Holy See)" : "va" ,
	"Honduras" : "hn" ,
	"Hong Kong" : "hk" ,
	"Hungary" : "hu" ,
	"Iceland" : "is" ,
	"India" : "in" ,
	"Indonesia" : "id" ,
	"Iran" : "ir" ,
	"Iraq" : "iq" ,
	"Ireland" : "ie" ,
	"Israel" : "il" ,
	"Italy" : "it" ,
	"Jamaica" : "jm" ,
	"Japan" : "jp" ,
	"Jordan" : "jo" ,
	"Kazakhstan" : "kz" ,
	"Kenya" : "ke" ,
	"Kiribati" : "ki" ,
	"Korea (North)" : "kp" ,
	"Korea (South)" : "kr" ,
	"Kuwait" : "kw" ,
	"Kyrgyzstan" : "kg" ,
	"Laos" : "la" ,
	"Latvia" : "lv" ,
	"Lebanon" : "lb" ,
	"Lesotho" : "ls" ,
	"Liberia" : "lr" ,
	"Libya" : "ly" ,
	"Liechtenstein" : "li" ,
	"Lithuania" : "lt" ,
	"Luxembourg" : "lu" ,
	"Macau" : "mo" ,
	"Macedonia" : "mk" ,
	"Madagascar" : "mg" ,
	"Malawi" : "mw" ,
	"Malaysia" : "my" ,
	"Maldives" : "mv" ,
	"Mali" : "ml" ,
	"Malta" : "mt" ,
	"Marshall Islands" : "mh" ,
	"Martinique" : "mq" ,
	"Mauritania" : "mr" ,
	"Mauritius" : "mu" ,
	"Mayotte" : "yt" ,
	"Mexico" : "mx" ,
	"Micronesia" : "fm" ,
	"Moldova" : "md" ,
	"Monaco" : "mc" ,
	"Mongolia" : "mn" ,
	"Montserrat" : "ms" ,
	"Morocco" : "ma" ,
	"Mozambique" : "mz" ,
	"Myanmar" : "mm" ,
	"Namibia" : "na" ,
	"Nauru" : "nr" ,
	"Nepal" : "np" ,
	"Netherlands" : "nl" ,
	"Netherlands Antilles" : "an" ,
	"New Caledonia" : "nc" ,
	"New Zealand" : "nz" ,
	"Nicaragua" : "ni" ,
	"Niger" : "ne" ,
	"Nigeria" : "ng" ,
	"Niue" : "nu" ,
	"Norfolk Island" : "nf" ,
	"Northern Mariana Islands" : "mp" ,
	"Norway" : "no" ,
	"Oman" : "om" ,
	"Pakistan" : "pk" ,
	"Palau" : "pw" ,
	"Panama" : "pa" ,
	"Papua New Guinea" : "pg" ,
	"Paraguay" : "py" ,
	"Peru" : "pe" ,
	"Philippines" : "ph" ,
	"Pitcairn" : "pn" ,
	"Poland" : "pl" ,
	"Portugal" : "pt" ,
	"Puerto Rico" : "pr" ,
	"Qatar" : "qa" ,
	"Reunion" : "re" ,
	"Romania" : "ro" ,
	"Russian Federation" : "ru" ,
	"Rwanda" : "rw" ,
	"St. Helena" : "sh" ,
	"Saint Kitts & Nevis" : "kn" ,
	"Saint Lucia" : "lc" ,
	"St. Pierre & Miquelon" : "pm" ,
	"St. Vincent & the Grenadines" : "vc" ,
	"Samoa" : "ws" ,
	"San Marino" : "sm" ,
	"Sao Tome & Principe" : "st" ,
	"Saudi Arabia" : "sa" ,
	"Senegal" : "sn" ,
	"Seychelles" : "sc" ,
	"Sierra Leone" : "sl" ,
	"Singapore" : "sg" ,
	"Slovak Republic" : "sk" ,
	"Slovenia" : "si" ,
	"Solomon Islands" : "sb" ,
	"Somalia" : "so" ,
	"South Africa" : "za" ,
	"S.Georgia & S.Sandwich Islands" : "gs" ,
	"Spain" : "es" ,
	"Sri Lanka" : "lk" ,
	"Sudan" : "sd" ,
	"Suriname" : "sr" ,
	"Svalbard & Jan Mayen Islands" : "sj" ,
	"Swaziland" : "sz" ,
	"Sweden" : "se" ,
	"Switzerland" : "ch" ,
	"Syria" : "sy" ,
	"Taiwan" : "tw" ,
	"Tajikistan" : "tj" ,
	"Tanzania" : "tz" ,
	"Thailand" : "th" ,
	"Togo" : "tg" ,
	"Tokelau" : "tk" ,
	"Tonga" : "to" ,
	"Trinidad & Tobago" : "tt" ,
	"Tunisia" : "tn" ,
	"Turkey" : "tr" ,
	"Turkmenistan" : "tm" ,
	"Turks & Caicos Islands" : "tc" ,
	"Tuvalu" : "tv" ,
	"Uganda" : "ug" ,
	"Ukraine" : "ua" ,
	"United Arab Emirates" : "ae" ,
	"United States" : "us" ,
	"Uruguay" : "uy" ,
	"Uzbekistan" : "uz" ,
	"Vanuatu" : "vu" ,
	"Venezuela" : "ve" ,
	"Viet Nam" : "vn" ,
	"Virgin Islands (British)" : "vg" ,
	"Virgin Islands (U.S.)" : "vi" ,
	"Wallis & Futuna Islands" : "wf" ,
	"Western Sahara" : "eh" ,
	"Yemen" : "ye" ,
	"Yugoslavia" : "yu" ,
	"Zambia" : "zm" ,
	"Zimbabwe" : "zw"
}
