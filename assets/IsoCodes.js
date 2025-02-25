const IsoCodes = [
    {"country": "Afghanistan", "iso_code": "AF", "continent": "Asia"},
    {"country": "Albania", "iso_code": "AL", "continent": "Europe"},
    {"country": "Algeria", "iso_code": "DZ", "continent": "Africa"},
    {"country": "Andorra", "iso_code": "AD", "continent": "Europe"},
    {"country": "Angola", "iso_code": "AO", "continent": "Africa"},
    {"country": "Antigua and Barbuda", "iso_code": "AG", "continent": "North America"},
    {"country": "Argentina", "iso_code": "AR", "continent": "South America"},
    {"country": "Armenia", "iso_code": "AM", "continent": "Asia"},
    {"country": "Australia", "iso_code": "AU", "continent": "Oceania"},
    {"country": "Austria", "iso_code": "AT", "continent": "Europe"},
    {"country": "Azerbaijan", "iso_code": "AZ", "continent": "Asia"},
    {"country": "Bahamas", "iso_code": "BS", "continent": "North America"},
    {"country": "Bahrain", "iso_code": "BH", "continent": "Asia"},
    {"country": "Bangladesh", "iso_code": "BD", "continent": "Asia"},
    {"country": "Barbados", "iso_code": "BB", "continent": "North America"},
    {"country": "Belarus", "iso_code": "BY", "continent": "Europe"},
    {"country": "Belgium", "iso_code": "BE", "continent": "Europe"},
    {"country": "Belize", "iso_code": "BZ", "continent": "North America"},
    {"country": "Benin", "iso_code": "BJ", "continent": "Africa"},
    {"country": "Bhutan", "iso_code": "BT", "continent": "Asia"},
    {"country": "Bolivia", "iso_code": "BO", "continent": "South America"},
    {"country": "Bosnia and Herzegovina", "iso_code": "BA", "continent": "Europe"},
    {"country": "Botswana", "iso_code": "BW", "continent": "Africa"},
    {"country": "Brazil", "iso_code": "BR", "continent": "South America"},
    {"country": "Brunei", "iso_code": "BN", "continent": "Asia"},
    {"country": "Bulgaria", "iso_code": "BG", "continent": "Europe"},
    {"country": "Burkina Faso", "iso_code": "BF", "continent": "Africa"},
    {"country": "Burundi", "iso_code": "BI", "continent": "Africa"},
    {"country": "Cabo Verde", "iso_code": "CV", "continent": "Africa"},
    {"country": "Cambodia", "iso_code": "KH", "continent": "Asia"},
    {"country": "Cameroon", "iso_code": "CM", "continent": "Africa"},
    {"country": "Canada", "iso_code": "CA", "continent": "North America"},
    {"country": "Central African Republic", "iso_code": "CF", "continent": "Africa"},
    {"country": "Chad", "iso_code": "TD", "continent": "Africa"},
    {"country": "Chile", "iso_code": "CL", "continent": "South America"},
    {"country": "China", "iso_code": "CN", "continent": "Asia"},
    {"country": "Colombia", "iso_code": "CO", "continent": "South America"},
    {"country": "Comoros", "iso_code": "KM", "continent": "Africa"},
    {"country": "Congo (Congo-Brazzaville)", "iso_code": "CG", "continent": "Africa"},
    {"country": "Congo (Democratic Republic)", "iso_code": "CD", "continent": "Africa"},
    {"country": "Costa Rica", "iso_code": "CR", "continent": "North America"},
    {"country": "Croatia", "iso_code": "HR", "continent": "Europe"},
    {"country": "Cuba", "iso_code": "CU", "continent": "North America"},
    {"country": "Cyprus", "iso_code": "CY", "continent": "Asia"},
    {"country": "Czechia", "iso_code": "CZ", "continent": "Europe"},
    {"country": "Denmark", "iso_code": "DK", "continent": "Europe"},
    {"country": "Djibouti", "iso_code": "DJ", "continent": "Africa"},
    {"country": "Dominica", "iso_code": "DM", "continent": "North America"},
    {"country": "Dominican Republic", "iso_code": "DO", "continent": "North America"},
    {"country": "Ecuador", "iso_code": "EC", "continent": "South America"},
    {"country": "Egypt", "iso_code": "EG", "continent": "Africa"},
    {"country": "El Salvador", "iso_code": "SV", "continent": "North America"},
    {"country": "Equatorial Guinea", "iso_code": "GQ", "continent": "Africa"},
    {"country": "Eritrea", "iso_code": "ER", "continent": "Africa"},
    {"country": "Estonia", "iso_code": "EE", "continent": "Europe"},
    {"country": "Eswatini", "iso_code": "SZ", "continent": "Africa"},
    {"country": "Ethiopia", "iso_code": "ET", "continent": "Africa"},
    {"country": "Fiji", "iso_code": "FJ", "continent": "Oceania"},
    {"country": "Finland", "iso_code": "FI", "continent": "Europe"},
    {"country": "France", "iso_code": "FR", "continent": "Europe"},
    {"country": "Gabon", "iso_code": "GA", "continent": "Africa"},
    {"country": "Gambia", "iso_code": "GM", "continent": "Africa"},
    {"country": "Georgia", "iso_code": "GE", "continent": "Asia"},
    {"country": "Germany", "iso_code": "DE", "continent": "Europe"},
    {"country": "Ghana", "iso_code": "GH", "continent": "Africa"},
    {"country": "Greece", "iso_code": "GR", "continent": "Europe"},
    {"country": "Grenada", "iso_code": "GD", "continent": "North America"},
    {"country": "Guatemala", "iso_code": "GT", "continent": "North America"},
    {"country": "Guinea", "iso_code": "GN", "continent": "Africa"},
    {"country": "Guinea-Bissau", "iso_code": "GW", "continent": "Africa"},
    {"country": "Guyana", "iso_code": "GY", "continent": "South America"},
    {"country": "Haiti", "iso_code": "HT", "continent": "North America"},
    {"country": "Honduras", "iso_code": "HN", "continent": "North America"},
    {"country": "Hungary", "iso_code": "HU", "continent": "Europe"},
    {"country": "Iceland", "iso_code": "IS", "continent": "Europe"},
    {"country": "India", "iso_code": "IN", "continent": "Asia"},
    {"country": "Indonesia", "iso_code": "ID", "continent": "Asia"},
    {"country": "Iran", "iso_code": "IR", "continent": "Asia"},
    {"country": "Iraq", "iso_code": "IQ", "continent": "Asia"},
    {"country": "Ireland", "iso_code": "IE", "continent": "Europe"},
    {"country": "Israel", "iso_code": "IL", "continent": "Asia"},
    {"country": "Italy", "iso_code": "IT", "continent": "Europe"},
    {"country": "Ivory Coast", "iso_code": "CI", "continent": "Africa"},
    {"country": "Jamaica", "iso_code": "JM", "continent": "North America"},
    {"country": "Japan", "iso_code": "JP", "continent": "Asia"},
    {"country": "Jordan", "iso_code": "JO", "continent": "Asia"},
    {"country": "Kazakhstan", "iso_code": "KZ", "continent": "Asia"},
    {"country": "Kenya", "iso_code": "KE", "continent": "Africa"},
    {"country": "Kiribati", "iso_code": "KI", "continent": "Oceania"},
    {"country": "Korea (North)", "iso_code": "KP", "continent": "Asia"},
    {"country": "Korea (South)", "iso_code": "KR", "continent": "Asia"},
    {"country": "Kuwait", "iso_code": "KW", "continent": "Asia"},
    {"country": "Kyrgyzstan", "iso_code": "KG", "continent": "Asia"},
    {"country": "Laos", "iso_code": "LA", "continent": "Asia"},
    {"country": "Latvia", "iso_code": "LV", "continent": "Europe"},
    {"country": "Lebanon", "iso_code": "LB", "continent": "Asia"},
    {"country": "Lesotho", "iso_code": "LS", "continent": "Africa"},
    {"country": "Liberia", "iso_code": "LR", "continent": "Africa"},
    {"country": "Libya", "iso_code": "LY", "continent": "Africa"},
    {"country": "Liechtenstein", "iso_code": "LI", "continent": "Europe"},
    {"country": "Lithuania", "iso_code": "LT", "continent": "Europe"},
    {"country": "Luxembourg", "iso_code": "LU", "continent": "Europe"},
    {"country": "Madagascar", "iso_code": "MG", "continent": "Africa"},
    {"country": "Malawi", "iso_code": "MW", "continent": "Africa"},
    {"country": "Malaysia", "iso_code": "MY", "continent": "Asia"},
    {"country": "Maldives", "iso_code": "MV", "continent": "Asia"},
    {"country": "Mali", "iso_code": "ML", "continent": "Africa"},
    {"country": "Malta", "iso_code": "MT", "continent": "Europe"},
    {"country": "Marshall Islands", "iso_code": "MH", "continent": "Oceania"},
    {"country": "Mauritania", "iso_code": "MR", "continent": "Africa"},
    {"country": "Mauritius", "iso_code": "MU", "continent": "Africa"},
    {"country": "Mexico", "iso_code": "MX", "continent": "North America"},
    {"country": "Micronesia", "iso_code": "FM", "continent": "Oceania"},
    {"country": "Moldova", "iso_code": "MD", "continent": "Europe"},
    {"country": "Monaco", "iso_code": "MC", "continent": "Europe"},
    {"country": "Mongolia", "iso_code": "MN", "continent": "Asia"},
    {"country": "Montenegro", "iso_code": "ME", "continent": "Europe"},
    {"country": "Morocco", "iso_code": "MA", "continent": "Africa"},
    {"country": "Mozambique", "iso_code": "MZ", "continent": "Africa"},
    {"country": "Myanmar", "iso_code": "MM", "continent": "Asia"},
    {"country": "Namibia", "iso_code": "NA", "continent": "Africa"},
    {"country": "Nauru", "iso_code": "NR", "continent": "Oceania"},
    {"country": "Nepal", "iso_code": "NP", "continent": "Asia"},
    {"country": "Netherlands", "iso_code": "NL", "continent": "Europe"},
    {"country": "New Zealand", "iso_code": "NZ", "continent": "Oceania"},
    {"country": "Nicaragua", "iso_code": "NI", "continent": "North America"},
    {"country": "Niger", "iso_code": "NE", "continent": "Africa"},
    {"country": "Nigeria", "iso_code": "NG", "continent": "Africa"},
    {"country": "North Macedonia", "iso_code": "MK", "continent": "Europe"},
    {"country": "Norway", "iso_code": "NO", "continent": "Europe"},
    {"country": "Oman", "iso_code": "OM", "continent": "Asia"},
    {"country": "Pakistan", "iso_code": "PK", "continent": "Asia"},
    {"country": "Palau", "iso_code": "PW", "continent": "Oceania"},
    {"country": "Panama", "iso_code": "PA", "continent": "North America"},
    {"country": "Papua New Guinea", "iso_code": "PG", "continent": "Oceania"},
    {"country": "Paraguay", "iso_code": "PY", "continent": "South America"},
    {"country": "Palestine", "iso_code": "PS", "continent": "Asia"},
    {"country": "Peru", "iso_code": "PE", "continent": "South America"},
    {"country": "French Polynesia", "iso_code": "PF", "continent": "Oceania"},
    {"country": "Philippines", "iso_code": "PH", "continent": "Asia"},
    {"country": "Poland", "iso_code": "PL", "continent": "Europe"},
    {"country": "Portugal", "iso_code": "PT", "continent": "Europe"},
    {"country": "Puerto Rico", "iso_code": "PR", "continent": "North America"},
    {"country": "Qatar", "iso_code": "QA", "continent": "Asia"},
    {"country": "Romania", "iso_code": "RO", "continent": "Europe"},
    {"country": "Russia", "iso_code": "RU", "continent": "Europe/Asia"},
    {"country": "Rwanda", "iso_code": "RW", "continent": "Africa"},
    {"country": "Saint Kitts and Nevis", "iso_code": "KN", "continent": "North America"},
    {"country": "Saint Lucia", "iso_code": "LC", "continent": "North America"},
    {"country": "Saint Vincent and the Grenadines", "iso_code": "VC", "continent": "North America"},
    {"country": "Samoa", "iso_code": "WS", "continent": "Oceania"},
    {"country": "San Marino", "iso_code": "SM", "continent": "Europe"},
    {"country": "Sao Tome and Principe", "iso_code": "ST", "continent": "Africa"},
    {"country": "Saudi Arabia", "iso_code": "SA", "continent": "Asia"},
    {"country": "Senegal", "iso_code": "SN", "continent": "Africa"},
    {"country": "Serbia", "iso_code": "RS", "continent": "Europe"},
    {"country": "Seychelles", "iso_code": "SC", "continent": "Africa"},
    {"country": "Sierra Leone", "iso_code": "SL", "continent": "Africa"},
    {"country": "Singapore", "iso_code": "SG", "continent": "Asia"},
    {"country": "Slovakia", "iso_code": "SK", "continent": "Europe"},
    {"country": "Slovenia", "iso_code": "SI", "continent": "Europe"},
    {"country": "Solomon Islands", "iso_code": "SB", "continent": "Oceania"},
    {"country": "Somalia", "iso_code": "SO", "continent": "Africa"},
    {"country": "South Africa", "iso_code": "ZA", "continent": "Africa"},
    {"country": "South Sudan", "iso_code": "SS", "continent": "Africa"},
    {"country": "Spain", "iso_code": "ES", "continent": "Europe"},
    {"country": "Sri Lanka", "iso_code": "LK", "continent": "Asia"},
    {"country": "Sudan", "iso_code": "SD", "continent": "Africa"},
    {"country": "Suriname", "iso_code": "SR", "continent": "South America"},
    {"country": "Sweden", "iso_code": "SE", "continent": "Europe"},
    {"country": "Switzerland", "iso_code": "CH", "continent": "Europe"},
    {"country": "Svalbard", "iso_code": "SJ", "continent": "Europe"},
    {"country": "Syria", "iso_code": "SY", "continent": "Asia"},
    {"country": "Taiwan", "iso_code": "TW", "continent": "Asia"},
    {"country": "Tajikistan", "iso_code": "TJ", "continent": "Asia"},
    {"country": "Tanzania", "iso_code": "TZ", "continent": "Africa"},
    {"country": "Thailand", "iso_code": "TH", "continent": "Asia"},
    {"country": "Timor-Leste", "iso_code": "TL", "continent": "Asia"},
    {"country": "Togo", "iso_code": "TG", "continent": "Africa"},
    {"country": "Tonga", "iso_code": "TO", "continent": "Oceania"},
    {"country": "Trinidad and Tobago", "iso_code": "TT", "continent": "North America"},
    {"country": "Tunisia", "iso_code": "TN", "continent": "Africa"},
    {"country": "Turkey", "iso_code": "TR", "continent": "Asia/Europe"},
    {"country": "Turkmenistan", "iso_code": "TM", "continent": "Asia"},
    {"country": "Tuvalu", "iso_code": "TV", "continent": "Oceania"},
    {"country": "Uganda", "iso_code": "UG", "continent": "Africa"},
    {"country": "Ukraine", "iso_code": "UA", "continent": "Europe"},
    {"country": "United Arab Emirates", "iso_code": "AE", "continent": "Asia"},
    {"country": "United Kingdom", "iso_code": "GB", "continent": "Europe"},
    {"country": "United States", "iso_code": "US", "continent": "North America"},
    {"country": "Uruguay", "iso_code": "UY", "continent": "South America"},
    {"country": "Uzbekistan", "iso_code": "UZ", "continent": "Asia"},
    {"country": "Vanuatu", "iso_code": "VU", "continent": "Oceania"},
    {"country": "Vatican City", "iso_code": "VA", "continent": "Europe"},
    {"country": "Venezuela", "iso_code": "VE", "continent": "South America"},
    {"country": "Vietnam", "iso_code": "VN", "continent": "Asia"},
    {"country": "Yemen", "iso_code": "YE", "continent": "Asia"},
    {"country": "Zambia", "iso_code": "ZM", "continent": "Africa"},
    {"country": "Zimbabwe", "iso_code": "ZW", "continent": "Africa"}
]