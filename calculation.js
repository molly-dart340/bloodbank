const Calculation = {
    data() {
        return {
            gender_selection: "",
            weight: "",
            height: ""
        }
    }, //end data property 	

    methods: {

        blood_calculation: function (event) {
            if (this.gender_selection == "Female") {
                //The alert below was used to test whether or not the button was working when the gender female was selected
                //alert(this.gender_selection)
                let weight = this.weight;
                let height = this.height;
                let femaleformula = 0.005835 * Math.pow(height, 3) + (15 * weight) + 183;
                let female_liters_form = femaleformula / 1000;
                alert((female_liters_form).toFixed(2))
                //Formula For Women = 0.005835 x Height in inches3 + 15 x Weight in lbs + 183
            }
            else if (this.gender_selection == "Male") {
                let weight = this.weight;
                let height = this.height;
                let maleformula = 0.006012 * Math.pow(height, 3) + (14.6 * weight) + 604;
                let male_liters_form = maleformula / 1000;
                alert((male_liters_form).toFixed(2));
                //Formula For Men = 0.006012 x Height in inches3 + 14.6 x Weight in lbs + 604
            }
        }
    }
} //end created method	} //end Vue object
Vue.createApp(Calculation).mount('#vue_calculation')