//--- EASY MODE ---

//Triadi Maggiori
var C_chord = {firstNote:'C3/w', secondNote:'E3/w', thirdNote:'G3/w', nameChord: 'C', pos1:'VI', pos2:'II', pos3:'IV'};
var Db_chord = {firstNote:'Db3/w', secondNote:'F3/w', thirdNote:'Ab3/w', nameChord: 'Db', pos1:'V', pos2:'I', pos3:'III'};
var D_chord = {firstNote:'D3/w', secondNote:'Gb3/w', thirdNote:'A3/w', nameChord: 'D', pos1:'IV', pos2:'V', pos3:'II'};
var Eb_chord = {firstNote:'Eb3/w', secondNote:'G3/w', thirdNote:'Bb3/w', nameChord: 'Eb', pos1:'III', pos2:'IV', pos3:'I'};
var E_chord = {firstNote:'E3/w', secondNote:'Ab3/w', thirdNote:'B3/w', nameChord: 'E', pos1:'II', pos2:'III', pos3:'IV'};
var F_chord = {firstNote:'F3/w', secondNote:'A3/w', thirdNote:'C4/w', nameChord: 'F', pos1:'I', pos2:'II', pos3:'III'};
var Gb_chord = {firstNote:'Gb2/w', secondNote:'Bb2/w', thirdNote:'Db3/w', nameChord: 'Gb', pos1:'V', pos2:'I', pos3:'V'};
var G_chord = {firstNote:'G2/w', secondNote:'B2/w', thirdNote:'D3/w', nameChord: 'G', pos1:'IV', pos2:'VII', pos3:'IV'};
var Ab_chord = {firstNote:'Ab2/w', secondNote:'C3/w', thirdNote:'Eb3/w', nameChord: 'Ab', pos1:'III', pos2:'VI', pos3:'III'};
var A_chord = {firstNote:'A2/w', secondNote:'Db3/w', thirdNote:'E3/w', nameChord: 'A', pos1:'II', pos2:'V', pos3:'II'};
var Bb_chord = {firstNote:'Bb2/w', secondNote:'D3/w', thirdNote:'F3/w', nameChord: 'Bb', pos1:'I', pos2:'IV', pos3:'I'};
var B_chord = {firstNote:'B2/w', secondNote:'Eb3/w', thirdNote:'Gb3/w', nameChord: 'B', pos1:'VII', pos2:'III', pos3:'V'};

//Triadi Minori
var C_min_chord = {firstNote:'C3/w', secondNote:'Eb3/w', thirdNote:'G3/w', nameChord: 'C min', pos1:'VI', pos2:'III', pos3:'IV'};
var Db_min_chord = {firstNote:'Db3/w', secondNote:'E3/w', thirdNote:'Ab3/w', nameChord: 'Db min', pos1:'V', pos2:'II', pos3:'III'};
var D_min_chord = {firstNote:'D3/w', secondNote:'F3/w', thirdNote:'A3/w', nameChord: 'D min', pos1:'IV', pos2:'I', pos3:'II'};
var Eb_min_chord = {firstNote:'Eb3/w', secondNote:'Gb3/w', thirdNote:'Bb3/w', nameChord: 'Eb min', pos1:'III', pos2:'V', pos3:'I'};
var E_min_chord = {firstNote:'E3/w', secondNote:'G3/w', thirdNote:'B3/w', nameChord: 'E min', pos1:'II', pos2:'IV', pos3:'IV'};
var F_min_chord = {firstNote:'F3/w', secondNote:'Ab3/w', thirdNote:'C4/w', nameChord: 'F min', pos1:'I', pos2:'III', pos3:'III'};
var Gb_min_chord = {firstNote:'Gb2/w', secondNote:'A2/w', thirdNote:'Db3/w', nameChord: 'Gb min', pos1:'V', pos2:'II', pos3:'V'};
var G_min_chord = {firstNote:'G2/w', secondNote:'Bb2/w', thirdNote:'D3/w', nameChord: 'G min', pos1:'IV', pos2:'I', pos3:'IV'};
var Ab_min_chord = {firstNote:'Ab2/w', secondNote:'B2/w', thirdNote:'Eb3/w', nameChord: 'Ab min', pos1:'III', pos2:'VII', pos3:'III'};
var A_min_chord = {firstNote:'A2/w', secondNote:'C3/w', thirdNote:'E3/w', nameChord: 'A min', pos1:'II', pos2:'VI', pos3:'II'};
var Bb_min_chord = {firstNote:'Bb2/w', secondNote:'Db3/w', thirdNote:'F3/w', nameChord: 'Bb min', pos1:'I', pos2:'V', pos3:'I'};
var B_min_chord = {firstNote:'B2/w', secondNote:'D3/w', thirdNote:'Gb3/w', nameChord: 'B min', pos1:'VII', pos2:'IV', pos3:'V'};

//---MEDIUM MODE---

//Triadi Maggiori Aumentate
var C_5a_chord = {firstNote:'C3/w', secondNote:'E3/w', thirdNote:'Ab3/w', nameChord:'C 5+', pos1:'VI', pos2:'II', pos3:'III'};
var Db_5a_chord = {firstNote:'Db3/w', secondNote:'F3/w', thirdNote:'A3/w', nameChord:'Db 5+', pos1:'V', pos2:'I', pos3:'II'};
var D_5a_chord = {firstNote:'D3/w', secondNote:'Gb3/w', thirdNote:'Bb3/w', nameChord:'D 5+', pos1:'IV', pos2:'V', pos3:'I'};
var Eb_5a_chord = {firstNote:'Eb3/w', secondNote:'G3/w', thirdNote:'B3/w', nameChord:'Eb 5+', pos1:'III', pos2:'IV', pos3:'IV'};
var E_5a_chord = {firstNote:'E3/w', secondNote:'Ab3/w', thirdNote:'C4/w', nameChord:'E 5+', pos1:'II', pos2:'III', pos3:'III'};
var F_5a_chord = {firstNote:'F3/w', secondNote:'A3/w', thirdNote:'Db3/w', nameChord:'F 5+', pos1:'I', pos2:'II', pos3:'II'};
var Gb_5a_chord = {firstNote:'Gb2/w', secondNote:'Bb2/w', thirdNote:'D3/w', nameChord:'Gb 5+', pos1:'V', pos2:'I', pos3:'I'};
var G_5a_chord = {firstNote:'G2/w', secondNote:'B2/w', thirdNote:'Eb3/w', nameChord:'G 5+', pos1:'IV', pos2:'VII', pos3:'III'};
var Ab_5a_chord = {firstNote:'Ab2/w', secondNote:'C3/w', thirdNote:'E3/w', nameChord:'Ab 5+', pos1:'III', pos2:'VI', pos3:'II'};
var A_5a_chord = {firstNote:'A2/w', secondNote:'Db3/w', thirdNote:'F3/w', nameChord:'A 5+', pos1:'II', pos2:'V', pos3:'I'};
var Bb_5a_chord = {firstNote:'Bb2/w', secondNote:'D3/w', thirdNote:'Gb3/w', nameChord:'Bb 5+', pos1:'I', pos2:'IV', pos3:'V'};
var B_5a_chord = {firstNote:'B2/w', secondNote:'Eb3/w', thirdNote:'G3/w', nameChord:'B 5+', pos1:'VII', pos2:'III', pos3:'IV'};

//Triadi Maggiori Diminuite
var C_5d_chord = {firstNote:'C3/w', secondNote:'E3/w', thirdNote:'Gb3/w', nameChord: 'C 5-', pos1:'VI', pos2:'II', pos3:'V'};
var Db_5d_chord = {firstNote:'Db3/w', secondNote:'F3/w', thirdNote:'G3/w', nameChord: 'Db 5-', pos1:'V', pos2:'I', pos3:'IV'};
var D_5d_chord = {firstNote:'D3/w', secondNote:'Gb3/w', thirdNote:'Ab3/w', nameChord: 'D 5-', pos1:'IV', pos2:'V', pos3:'III'};
var Eb_5d_chord = {firstNote:'Eb3/w', secondNote:'G3/w', thirdNote:'A3/w', nameChord: 'Eb 5-', pos1:'III', pos2:'IV', pos3:'III'};
var E_5d_chord = {firstNote:'E3/w', secondNote:'Ab3/w', thirdNote:'Bb3/w', nameChord: 'E 5-', pos1:'II', pos2:'III', pos3:'III'};
var F_5d_chord = {firstNote:'F3/w', secondNote:'A3/w', thirdNote:'B3/w', nameChord: 'F 5-', pos1:'I', pos2:'II', pos3:'IV'};
var Gb_5d_chord = {firstNote:'Gb2/w', secondNote:'Bb2/w', thirdNote:'C4/w', nameChord: 'Gb 5-', pos1:'V', pos2:'I', pos3:'III'};
var G_5d_chord = {firstNote:'G2/w', secondNote:'B2/w', thirdNote:'Db3/w', nameChord: 'G 5-', pos1:'IV', pos2:'VII', pos3:'V'};
var Ab_5d_chord = {firstNote:'Ab2/w', secondNote:'C3/w', thirdNote:'D3/w', nameChord: 'Ab 5-', pos1:'III', pos2:'VI', pos3:'IV'};
var A_5d_chord = {firstNote:'A2/w', secondNote:'Db3/w', thirdNote:'Eb3/w', nameChord: 'A 5-', pos1:'II', pos2:'V', pos3:'III'};
var Bb_5d_chord = {firstNote:'Bb2/w', secondNote:'D3/w', thirdNote:'E3/w', nameChord: 'Bb 5-', pos1:'I', pos2:'IV', pos3:'II'};
var B_5d_chord = {firstNote:'B2/w', secondNote:'Eb3/w', thirdNote:'F3/w', nameChord: 'B 5-', pos1:'VII', pos2:'III', pos3:'I'};

//Triadi Minori Aumentate
var C_minor_5a_chord = {firstNote:'C3/w', secondNote:'Eb3/w', thirdNote:'Ab3/w', nameChord: 'C min 5+', pos1:'VI', pos2:'III', pos3:'III'};
var Db_minor_5a_chord = {firstNote:'Db3/w', secondNote:'E3/w', thirdNote:'A3/w', nameChord: 'Db min 5+', pos1:'V', pos2:'II', pos3:'II'};
var D_minor_5a_chord = {firstNote:'D3/w', secondNote:'F3/w', thirdNote:'Bb3/w', nameChord: 'D min 5+', pos1:'IV', pos2:'I', pos3:'I'};
var Eb_minor_5a_chord = {firstNote:'Eb3/w', secondNote:'Gb3/w', thirdNote:'B3/w', nameChord: 'Eb min 5+', pos1:'III', pos2:'V', pos3:'IV'};
var E_minor_5a_chord = {firstNote:'E3/w', secondNote:'G3/w', thirdNote:'C4/w', nameChord: 'E min 5+', pos1:'II', pos2:'IV', pos3:'III'};
var F_minor_5a_chord = {firstNote:'F3/w', secondNote:'Ab3/w', thirdNote:'Db4/w', nameChord: 'F min 5+', pos1:'I', pos2:'III', pos3:'II'};
var Gb_minor_5a_chord = {firstNote:'Gb2/w', secondNote:'A2/w', thirdNote:'D3/w', nameChord: 'Gb min 5+', pos1:'V', pos2:'II', pos3:'IV'};
var G_minor_5a_chord = {firstNote:'G2/w', secondNote:'Bb2/w', thirdNote:'Eb3/w', nameChord: 'G min 5+', pos1:'IV', pos2:'I', pos3:'III'};
var Ab_minor_5a_chord = {firstNote:'Ab2/w', secondNote:'B2/w', thirdNote:'E3/w', nameChord: 'Ab min 5+', pos1:'III', pos2:'VII', pos3:'II'};
var A_minor_5a_chord = {firstNote:'A2/w', secondNote:'C3/w', thirdNote:'F3/w', nameChord: 'A min 5+', pos1:'II', pos2:'VI', pos3:'I'};
var Bb_minor_5a_chord = {firstNote:'Bb2/w', secondNote:'Db3/w', thirdNote:'Gb3/w', nameChord: 'Bb min 5+', pos1:'I', pos2:'V', pos3:'V'};
var B_minor_5a_chord = {firstNote:'B2/w', secondNote:'D3/w', thirdNote:'G3/w', nameChord: 'B min 5+', pos1:'VII', pos2:'IV', pos3:'IV'};

//Triadi Minori Diminuite
var C_minor_5d_chord = {firstNote:'C3/w', secondNote:'Eb3/w', thirdNote:'Gb3/w', nameChord: 'C min 5-', pos1:'VI', pos2:'III', pos3:'V'};
var Db_minor_5d_chord = {firstNote:'Db3/w', secondNote:'E3/w', thirdNote:'G3/w', nameChord: 'Db min 5-', pos1:'V', pos2:'II', pos3:'IV'};
var D_minor_5d_chord = {firstNote:'D3/w', secondNote:'F3/w', thirdNote:'Ab3/w', nameChord: 'D min 5-', pos1:'IV', pos2:'I', pos3:'III'};
var Eb_minor_5d_chord = {firstNote:'Eb3/w', secondNote:'Gb3/w', thirdNote:'A3/w', nameChord: 'Eb min 5-', pos1:'III', pos2:'V', pos3:'II'};
var E_minor_5d_chord = {firstNote:'E3/w', secondNote:'G3/w', thirdNote:'Bb3/w', nameChord: 'E min 5-', pos1:'II', pos2:'IV', pos3:'I'};
var F_minor_5d_chord = {firstNote:'F3/w', secondNote:'Ab3/w', thirdNote:'B3/w', nameChord: 'F min 5-', pos1:'I', pos2:'III', pos3:'IV'};
var Gb_minor_5d_chord = {firstNote:'Gb2/w', secondNote:'A2/w', thirdNote:'C3/w', nameChord: 'Gb min 5-', pos1:'V', pos2:'II', pos3:'VI'};
var G_minor_5d_chord = {firstNote:'G2/w', secondNote:'Bb2/w', thirdNote:'Db3/w', nameChord: 'G min 5-', pos1:'IV', pos2:'I', pos3:'III'};
var Ab_minor_5d_chord = {firstNote:'Ab2/w', secondNote:'B2/w', thirdNote:'D3/w', nameChord: 'Ab min 5-', pos1:'III', pos2:'VII', pos3:'IV'};
var A_minor_5d_chord = {firstNote:'A2/w', secondNote:'C3/w', thirdNote:'Eb3/w', nameChord: 'A min 5-', pos1:'II', pos2:'VI', pos3:'III'};
var Bb_minor_5d_chord = {firstNote:'Bb2/w', secondNote:'Db3/w', thirdNote:'E3/w', nameChord: 'Bb min 5-', pos1:'I', pos2:'V', pos3:'II'};
var B_minor_5d_chord = {firstNote:'B2/w', secondNote:'D3/w', thirdNote:'F3/w', nameChord: 'B min 5-', pos1:'VII', pos2:'IV', pos3:'I'};

//---HARD MODE---

//Settime di Dominante
var C_7_chord = {firstNote:'C3/w', secondNote:'E3/w', thirdNote:'G3/w', fourthNote:'Bb3/w', nameChord: 'C 7', pos1:'VI', pos2:'II', pos3:'IV', pos4:'I'};
var Db_7_chord = {firstNote:'Db3/w', secondNote:'F3/w', thirdNote:'Ab3/w', fourthNote:'B3/w', nameChord: 'Db 7', pos1:'V', pos2:'I', pos3:'III', pos4:'IV'};
var D_7_chord = {firstNote:'D3/w', secondNote:'Gb3/w', thirdNote:'A3/w', fourthNote:'C4/w', nameChord: 'D 7', pos1:'IV', pos2:'V', pos3:'II', pos4:'III'};
var Eb_7_chord = {firstNote:'Eb3/w', secondNote:'G3/w', thirdNote:'Bb3/w', fourthNote:'Db4/w', nameChord: 'Eb 7', pos1:'III', pos2:'IV', pos3:'I', pos4:'II'};
var E_7_chord = {firstNote:'E3/w', secondNote:'Ab3/w', thirdNote:'B3/w', fourthNote:'D4/w', nameChord: 'E 7', pos1:'II', pos2:'III', pos3:'IV', pos4:'I'};
var F_7_chord = {firstNote:'F3/w', secondNote:'A3/w', thirdNote:'C4/w', fourthNote:'Eb4/w', nameChord: 'F 7', pos1:'I', pos2:'II', pos3:'III', pos4:'III'};
var Gb_7_chord = {firstNote:'Gb2/w', secondNote:'Bb2/w', thirdNote:'Db3/w', fourthNote:'E3/w', nameChord: 'Gb 7', pos1:'V', pos2:'I', pos3:'V', pos4:'II'};
var G_7_chord = {firstNote:'G2/w', secondNote:'B2/w', thirdNote:'D3/w', fourthNote:'F3/w', nameChord: 'G 7', pos1:'IV', pos2:'VII', pos3:'IV', pos4:'I'};
var Ab_7_chord = {firstNote:'Ab2/w', secondNote:'C3/w', thirdNote:'Eb3/w', fourthNote:'Gb3/w', nameChord: 'Ab 7', pos1:'III', pos2:'VI', pos3:'III', pos4:'V'};
var A_7_chord = {firstNote:'A2/w', secondNote:'Db3/w', thirdNote:'E3/w', fourthNote:'G3/w', nameChord: 'A 7', pos1:'II', pos2:'V', pos3:'II', pos4:'IV'};
var Bb_7_chord = {firstNote:'Bb2/w', secondNote:'D3/w', thirdNote:'F3/w', fourthNote:'Ab3/w', nameChord: 'Bb 7', pos1:'I', pos2:'IV', pos3:'I', pos4:'III'};
var B_7_chord = {firstNote:'B2/w', secondNote:'Eb3/w', thirdNote:'Gb3/w', fourthNote:'A3/w', nameChord: 'B 7', pos1:'VII', pos2:'III', pos3:'V', pos4:'II'};

//Settime Minori
var C_min_7_chord = {firstNote:'C3/w', secondNote:'Eb3/w', thirdNote:'G3/w', fourthNote:'Bb3/w', nameChord: 'C min 7', pos1:'VI', pos2:'III', pos3:'IV', pos4:'I'};
var Db_min_7_chord = {firstNote:'Db3/w', secondNote:'E3/w', thirdNote:'Ab3/w', fourthNote:'B3/w', nameChord: 'Db min 7', pos1:'V', pos2:'II', pos3:'III', pos4:'IV'};
var D_min_7_chord = {firstNote:'D3/w', secondNote:'F3/w', thirdNote:'A3/w', fourthNote:'C4/w', nameChord: 'D min 7', pos1:'IV', pos2:'I', pos3:'II', pos4:'III'};
var Eb_min_7_chord = {firstNote:'Eb3/w', secondNote:'Gb3/w', thirdNote:'Bb3/w', fourthNote:'Db4/w', nameChord: 'Eb min 7', pos1:'III', pos2:'V', pos3:'I', pos4:'II'};
var E_min_7_chord = {firstNote:'E3/w', secondNote:'G3/w', thirdNote:'B3/w', fourthNote:'D4/w', nameChord: 'E min 7', pos1:'II', pos2:'IV', pos3:'IV', pos4:'I'};
var F_min_7_chord = {firstNote:'F3/w', secondNote:'Ab3/w', thirdNote:'C4/w', fourthNote:'Eb3/w', nameChord: 'F min 7', pos1:'I', pos2:'III', pos3:'III', pos4:'III'};
var Gb_min_7_chord = {firstNote:'Gb2/w', secondNote:'A2/w', thirdNote:'Db3/w', fourthNote:'E3/w', nameChord: 'Gb min 7', pos1:'V', pos2:'II', pos3:'V', pos4:'II'};
var G_min_7_chord = {firstNote:'G2/w', secondNote:'Bb2/w', thirdNote:'D3/w', fourthNote:'F3/w', nameChord: 'G min 7', pos1:'IV', pos2:'I', pos3:'IV', pos4:'I'};
var Ab_min_7_chord = {firstNote:'Ab2/w', secondNote:'B2/w', thirdNote:'Eb3/w', fourthNote:'Gb3/w', nameChord: 'Ab min 7', pos1:'III', pos2:'VII', pos3:'III', pos4:'V'};
var A_min_7_chord = {firstNote:'A2/w', secondNote:'C3/w', thirdNote:'E3/w', fourthNote:'G3/w', nameChord: 'A min 7', pos1:'II', pos2:'III', pos3:'II', pos4:'IV'};
var Bb_min_7_chord = {firstNote:'Bb2/w', secondNote:'Db3/w', thirdNote:'F3/w', fourthNote:'Ab3/w', nameChord: 'Bb min 7', pos1:'I', pos2:'V', pos3:'I', pos4:'III'};
var B_min_7_chord = {firstNote:'B2/w', secondNote:'D3/w', thirdNote:'Gb3/w', fourthNote:'A3/w', nameChord: 'B min 7', pos1:'VII', pos2:'IV', pos3:'V', pos4:'II'};

//Settime maggiori
var C_7a_chord = {firstNote:'C3/w', secondNote:'E3/w', thirdNote:'G3/w', fourthNote: 'B3/w', nameChord: 'C 7+', pos1:'VI', pos2:'II', pos3:'IV', pos4:'IV'};
var Db_7a_chord = {firstNote:'Db3/w', secondNote:'F3/w', thirdNote:'Ab3/w', fourthNote: 'C4/w', nameChord: 'Db 7+', pos1:'V', pos2:'I', pos3:'III', pos4:'III'};
var D_7a_chord = {firstNote:'D3/w', secondNote:'Gb3/w', thirdNote:'A3/w', fourthNote: 'Db4/w', nameChord: 'D 7+', pos1:'IV', pos2:'V', pos3:'II', pos4:'II'};
var Eb_7a_chord = {firstNote:'Eb3/w', secondNote:'G3/w', thirdNote:'Bb3/w', fourthNote: 'D4/w', nameChord: 'Eb 7+', pos1:'III', pos2:'IV', pos3:'I', pos4:'I'};
var E_7a_chord = {firstNote:'E3/w', secondNote:'Ab3/w', thirdNote:'B3/w', fourthNote: 'Eb4/w', nameChord: 'E 7+', pos1:'II', pos2:'III', pos3:'IV', pos4:'III'};
var F_7a_chord = {firstNote:'F3/w', secondNote:'A3/w', thirdNote:'C4/w', fourthNote: 'E4/w', nameChord: 'F 7+', pos1:'I', pos2:'II', pos3:'III', pos4:'II'};
var Gb_7a_chord = {firstNote:'Gb2/w', secondNote:'Bb2/w', thirdNote:'Db3/w', fourthNote: 'F3/w', nameChord: 'Gb 7+', pos1:'V', pos2:'I', pos3:'V', pos4:'I'};
var G_7a_chord = {firstNote:'G2/w', secondNote:'B2/w', thirdNote:'D3/w', fourthNote: 'Gb3/w', nameChord: 'G 7+', pos1:'IV', pos2:'VII', pos3:'IV', pos4:'V'};
var Ab_7a_chord = {firstNote:'Ab2/w', secondNote:'C3/w', thirdNote:'Eb3/w', fourthNote: 'G3/w', nameChord: 'Ab 7+', pos1:'III', pos2:'VI', pos3:'III', pos4:'IV'};
var A_7a_chord = {firstNote:'A2/w', secondNote:'Db3/w', thirdNote:'E3/w', fourthNote: 'Ab3/w', nameChord: 'A 7+', pos1:'II', pos2:'V', pos3:'II', pos4:'III'};
var Bb_7a_chord = {firstNote:'Bb2/w', secondNote:'D3/w', thirdNote:'F3/w', fourthNote: 'A3/w', nameChord: 'Bb 7+', pos1:'I', pos2:'IV', pos3:'I', pos4:'II'};
var B_7a_chord = {firstNote:'B2/w', secondNote:'Eb3/w', thirdNote:'Gb3/w', fourthNote: 'Bb3/w', nameChord: 'B 7+', pos1:'VII', pos2:'III', pos3:'V', pos4:'I'};

//Settime minori aumentate
var C_min_7a_chord = {firstNote:'C3/w', secondNote:'Eb3/w', thirdNote:'G3/w', fourthNote: 'B3/w', nameChord: 'C min 7+', pos1:'VI', pos2:'III', pos3:'IV', pos4:'IV'};
var Db_min_7a_chord = {firstNote:'Db3/w', secondNote:'E3/w', thirdNote:'Ab3/w', fourthNote: 'C4/w', nameChord: 'Db min 7+', pos1:'V', pos2:'II', pos3:'III', pos4:'III'};
var D_min_7a_chord = {firstNote:'D3/w', secondNote:'F3/w', thirdNote:'A3/w', fourthNote: 'Db4/w', nameChord: 'D min 7+', pos1:'IV', pos2:'I', pos3:'II', pos4:'II'};
var Eb_min_7a_chord = {firstNote:'Eb3/w', secondNote:'Gb3/w', thirdNote:'Bb3/w', fourthNote: 'D4/w', nameChord: 'Eb min 7+', pos1:'III', pos2:'V', pos3:'I', pos4:'I'};
var E_min_7a_chord = {firstNote:'E3/w', secondNote:'G3/w', thirdNote:'B3/w', fourthNote: 'Eb4/w', nameChord: 'E min 7+', pos1:'II', pos2:'IV', pos3:'IV', pos4:'III'};
var F_min_7a_chord = {firstNote:'F3/w', secondNote:'Ab3/w', thirdNote:'C4/w', fourthNote: 'E4/w', nameChord: 'F min 7+', pos1:'I', pos2:'III', pos3:'III', pos4:'II'};
var Gb_min_7a_chord = {firstNote:'Gb2/w', secondNote:'A2/w', thirdNote:'Db3/w', fourthNote: 'F3/w', nameChord: 'Gb min 7+', pos1:'V', pos2:'II', pos3:'V', pos4:'I'};
var G_min_7a_chord = {firstNote:'G2/w', secondNote:'Bb2/w', thirdNote:'D3/w', fourthNote: 'Gb3/w', nameChord: 'G min 7+', pos1:'IV', pos2:'I', pos3:'IV', pos4:'V'};
var Ab_min_7a_chord = {firstNote:'Ab2/w', secondNote:'B2/w', thirdNote:'Eb3/w', fourthNote: 'G3/w', nameChord: 'Ab min 7+', pos1:'III', pos2:'VII', pos3:'III', pos4:'IV'};
var A_min_7a_chord = {firstNote:'A2/w', secondNote:'C3/w', thirdNote:'E3/w', fourthNote: 'Ab3/w', nameChord: 'A min 7+', pos1:'II', pos2:'III', pos3:'II', pos4:'III'};
var Bb_min_7a_chord = {firstNote:'Bb2/w', secondNote:'Db3/w', thirdNote:'F3/w', fourthNote: 'A3/w', nameChord: 'Bb min 7+', pos1:'I', pos2:'V', pos3:'I', pos4:'II'};
var B_min_7a_chord = {firstNote:'B2/w', secondNote:'D3/w', thirdNote:'Gb3/w', fourthNote: 'Bb3/w', nameChord: 'B min 7+', pos1:'VII', pos2:'IV', pos3:'V', pos4:'I'};

//---EPIC MODE---

// None di dominante
var C_9_chord = {firstNote:'C3/w', secondNote:'E3/w', thirdNote:'G3/w', fourthNote:'Bb3/w', fifthNote: 'D4/w', nameChord: 'C 9', pos1:'VI', pos2:'II', pos3:'IV', pos4:'I', pos5:'I'};
var Db_9_chord = {firstNote:'Db3/w', secondNote:'F3/w', thirdNote:'Ab3/w', fourthNote:'B3/w', fifthNote: 'Eb4/w', nameChord: 'Db 9', pos1:'V', pos2:'I', pos3:'III', pos4:'IV', pos5:'III'};
var D_9_chord = {firstNote:'D3/w', secondNote:'Gb3/w', thirdNote:'A3/w', fourthNote:'C4/w', fifthNote: 'E4/w', nameChord: 'D 9', pos1:'IV', pos2:'V', pos3:'II', pos4:'III', pos5:'II'};
var Eb_9_chord = {firstNote:'Eb3/w', secondNote:'G3/w', thirdNote:'Bb3/w', fourthNote:'Db4/w', fifthNote: 'F4/w', nameChord: 'Eb 9', pos1:'III', pos2:'IV', pos3:'I', pos4:'II', pos5:'I'};
var E_9_chord = {firstNote:'E3/w', secondNote:'Ab3/w', thirdNote:'B3/w', fourthNote:'D4/w', fifthNote: 'Gb4/w', nameChord: 'E 9', pos1:'II', pos2:'III', pos3:'IV', pos4:'I', pos5:'III'};
var F_9_chord = {firstNote:'F3/w', secondNote:'A3/w', thirdNote:'C4/w', fourthNote:'Eb4/w', fifthNote: 'G4/w', nameChord: 'F 9', pos1:'I', pos2:'II', pos3:'III', pos4:'III', pos5:'II'};
var Gb_9_chord = {firstNote:'Gb2/w', secondNote:'Bb2/w', thirdNote:'Db3/w', fourthNote:'E3/w', fifthNote: 'Ab3/w', nameChord: 'Gb 9', pos1:'V', pos2:'I', pos3:'V', pos4:'II', pos5:'III'};
var G_9_chord = {firstNote:'G2/w', secondNote:'B2/w', thirdNote:'D3/w', fourthNote:'F3/w', fifthNote: 'A3/w', nameChord: 'G 9', pos1:'IV', pos2:'VII', pos3:'IV', pos4:'I', pos5:'II'};
var Ab_9_chord = {firstNote:'Ab2/w', secondNote:'C3/w', thirdNote:'Eb3/w', fourthNote:'Gb3/w', fifthNote: 'Bb3/w', nameChord: 'Ab 9', pos1:'III', pos2:'VI', pos3:'III', pos4:'V', pos5:'I'};
var A_9_chord = {firstNote:'A2/w', secondNote:'Db3/w', thirdNote:'E3/w', fourthNote:'G3/w', fifthNote: 'B3/w', nameChord: 'A 9', pos1:'II', pos2:'V', pos3:'II', pos4:'IV', pos5:'III'};
var Bb_9_chord = {firstNote:'Bb2/w', secondNote:'D3/w', thirdNote:'F3/w', fourthNote:'Ab3/w', fifthNote: 'C4/w', nameChord: 'Bb 9', pos1:'I', pos2:'IV', pos3:'I', pos4:'III', pos5:'III'};
var B_9_chord = {firstNote:'B2/w', secondNote:'Eb3/w', thirdNote:'Gb3/w', fourthNote:'A3/w', fifthNote: 'Db4/w', nameChord: 'B 9', pos1:'VII', pos2:'III', pos3:'V', pos4:'II', pos5:'II'};

// None minori
var C_min_9_chord = {firstNote:'C3/w', secondNote:'Eb3/w', thirdNote:'G3/w', fourthNote:'Bb3/w', fifthNote: 'D4/w', nameChord: 'C min 9', pos1:'VI', pos2:'III', pos3:'IV', pos4:'I', pos5:'I'};
var Db_min_9_chord = {firstNote:'Db3/w', secondNote:'E3/w', thirdNote:'Ab3/w', fourthNote:'B3/w', fifthNote: 'Eb4/w', nameChord: 'Db min 9', pos1:'V', pos2:'II', pos3:'III', pos4:'IV', pos5:'III'};
var D_min_9_chord = {firstNote:'D3/w', secondNote:'F3/w', thirdNote:'A3/w', fourthNote:'C4/w', fifthNote: 'E4/w', nameChord: 'D min 9', pos1:'IV', pos2:'I', pos3:'II', pos4:'III', pos5:'II'};
var Eb_min_9_chord = {firstNote:'Eb3/w', secondNote:'Gb3/w', thirdNote:'Bb3/w', fourthNote:'Db4/w', fifthNote: 'F4/w', nameChord: 'Eb min 9', pos1:'III', pos2:'V', pos3:'I', pos4:'II', pos5:'I'};
var E_min_9_chord = {firstNote:'E3/w', secondNote:'G3/w', thirdNote:'B3/w', fourthNote:'D4/w', fifthNote: 'Gb4/w', nameChord: 'E min 9', pos1:'II', pos2:'IV', pos3:'IV', pos4:'I', pos5:'III'};
var F_min_9_chord = {firstNote:'F3/w', secondNote:'Ab3/w', thirdNote:'C4/w', fourthNote:'Eb4/w', fifthNote: 'G4/w', nameChord: 'F min 9', pos1:'I', pos2:'III', pos3:'III', pos4:'III', pos5:'II'};
var Gb_min_9_chord = {firstNote:'Gb2/w', secondNote:'A2/w', thirdNote:'Db3/w', fourthNote:'E3/w', fifthNote: 'Ab3/w', nameChord: 'Gb min 9', pos1:'V', pos2:'II', pos3:'V', pos4:'II', pos5:'III'};
var G_min_9_chord = {firstNote:'G2/w', secondNote:'Bb2/w', thirdNote:'D3/w', fourthNote:'F3/w', fifthNote: 'A3/w', nameChord: 'G min 9', pos1:'IV', pos2:'I', pos3:'IV', pos4:'I', pos5:'II'};
var Ab_min_9_chord = {firstNote:'Ab2/w', secondNote:'B2/w', thirdNote:'Eb3/w', fourthNote:'Gb3/w', fifthNote: 'Bb3/w', nameChord: 'Ab min 9', pos1:'III', pos2:'VII', pos3:'III', pos4:'V', pos5:'I'};
var A_min_9_chord = {firstNote:'A2/w', secondNote:'C3/w', thirdNote:'E3/w', fourthNote:'G3/w', fifthNote: 'B3/w', nameChord: 'A min 9', pos1:'II', pos2:'III', pos3:'II', pos4:'IV', pos5:'IV'};
var Bb_min_9_chord = {firstNote:'Bb2/w', secondNote:'Db3/w', thirdNote:'F3/w', fourthNote:'Ab3/w', fifthNote: 'C3/w', nameChord: 'Bb min 9', pos1:'I', pos2:'V', pos3:'I', pos4:'III', pos5:'III'};
var B_min_9_chord = {firstNote:'B2/w', secondNote:'D3/w', thirdNote:'Gb3/w', fourthNote:'A3/w', fifthNote: 'Db3/w', nameChord: 'B min 9', pos1:'VII', pos2:'IV', pos3:'V', pos4:'II', pos5:'II'};

