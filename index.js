$(document).ready(function() {
    // Hide error icons by default
    $('.error-icon').hide();

    $('#taxForm').submit(function(event) {
        event.preventDefault();

        // Validate input fields
        var grossIncome = $('#grossIncome').val();
        var extraIncome = $('#extraIncome').val();
        var ageGroup = $('#ageGroup').val();
        var deductions = $('#deductions').val();

        if (grossIncome == '') {
            $('#grossIncomeError').show();
            return;
        } else {
            $('#grossIncomeError').hide();
        }

        if (isNaN(extraIncome)) {
            $('#extraIncomeError').show();
            return;
        } else {
            $('#extraIncomeError').hide();
        }

        if (ageGroup == '') {
            $('#ageGroupError').show();
            return;
        } else {
            $('#ageGroupError').hide();
        }

        if (isNaN(deductions)) {
            $('#deductionsError').show();
            return;
        } else {
            $('#deductionsError').hide();
        }

        // Calculate tax
        var overallIncome = parseInt(grossIncome) + parseInt(extraIncome) - parseInt(deductions);
        var tax = 0;

        if (overallIncome > 800000) {
            if (ageGroup == '<40') {
                tax = 0.3 * (overallIncome - 800000);
            } else if (ageGroup == '>=40 but <60') {
                tax = 0.4 * (overallIncome - 800000);
            } else if (ageGroup == '>=60') {
                tax = 0.1 * (overallIncome - 800000);
            }
        }

        // Calculate overall income after deducting taxes
        var overallIncomeAfterTax = overallIncome - tax;

        // Display result in modal
        var modalContent = "<p>Your Overall Income Will Be</p>";
        modalContent += "<p>" + overallIncomeAfterTax.toLocaleString() + " INR</p>";
        modalContent += "<p>After deducting all the taxes</p>";

        $('#modalText').html(modalContent);
        $('#resultModal').modal('show');
    });
});
