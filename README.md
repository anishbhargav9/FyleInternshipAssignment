# FyleInternshipAssignment

index.html Code:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tax Calculator</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="./index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>
    <div class="container mt-5">
        <h2 class="text-center mb-4">Tax Calculator</h2>
        <div class="row justify-content-center">
            <div class="col-md-9">
                <form id="taxForm">
                    <div class="form-group">
                        <label for="grossIncome" class="input-label">Enter Gross Annual Income:
                            <span class="tooltip-icon" data-toggle="tooltip" data-placement="top" title="Gross annual income is your total salary in a year before any deductions">
                                <i class="far fa-question-circle"></i>
                            </span>
                        </label>
                        <input type="text" class="form-control" id="grossIncome" required>
                        <i class="fas fa-exclamation-circle error-icon" title="Enter Numbers Only"></i>
                    </div>
                    <div class="form-group">
                        <label for="extraIncome">Enter Extra Income:
                            <span class="tooltip-icon" data-toggle="tooltip" data-placement="top" title="Enter additional income sources like investments, part-time jobs, or rental properties.">
                                <i class="far fa-question-circle"></i>
                            </span>
                        </label>
                        <input type="text" class="form-control" id="extraIncome">
                        <i class="fas fa-exclamation-circle error-icon" title="Enter Numbers Only"></i>
                    </div>
                    <div class="form-group">
                        <label for="ageGroup">Select Age Group:</label>
                        <select class="form-control" id="ageGroup">
                            <option value="<40">&lt;40</option>
                            <option value=">=40 but <60">&ge;40 but &lt;60</option>
                            <option value=">=60">&ge;60</option>
                        </select>
                        <i class="fas fa-exclamation-circle error-icon" title="Enter Numbers Only"></i>
                    </div>
                    <div class="form-group">
                        <label for="deductions">Enter Total Applicable Deductions:
                            <span class="tooltip-icon" data-toggle="tooltip" data-placement="top" title="Input deductions eligible for tax reduction, such as investments or insurance premiums.">
                                <i class="far fa-question-circle"></i>
                            </span>
                        </label>
                        <input type="text" class="form-control" id="deductions">
                        <i class="fas fa-exclamation-circle error-icon" title="Enter Numbers Only"></i>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="resultModal" tabindex="-1" role="dialog" aria-labelledby="resultModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="resultModalLabel">Tax Calculation Result</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="./index.js"></script> 
    <script>
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();   

            // Function to check for alphabets in input fields
            function checkForAlphabets() {
                var hasAlphabets = false;
                $('input[type="text"], input[type="number"]').each(function() {
                    var value = $(this).val();
                    if (/[a-zA-Z]/.test(value)) {
                        $(this).siblings('.error-icon').show(); // Showing error icon within the same form group
                        hasAlphabets = true;
                    } else {
                        $(this).siblings('.error-icon').hide(); // Hiding error icon within the same form group
                    }
                });
                return hasAlphabets;
            }

            // Event listener for submit button click
            $('#taxForm').submit(function(event) {
                if (checkForAlphabets()) {
                    event.preventDefault(); // Preventing form submission if alphabets are found
                    alert("Please enter numbers only.");
                }
            });

            // Event listener for input fields to check for alphabets
            $('input[type="text"], input[type="number"]').on('input', function() {
                var value = $(this).val();
                if (/[a-zA-Z]/.test(value)) {
                    $(this).siblings('.error-icon').show(); // Showing error icon within the same form group
                } else {
                    $(this).siblings('.error-icon').hide(); // Hiding error icon within the same form group
                }
            });
        });
    </script>
</body>
</html>








.container {
    width: 600px;
    height: 600px;
    border: 1px solid black;
}
