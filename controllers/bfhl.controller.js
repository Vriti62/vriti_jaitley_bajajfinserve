exports.handleBfhlPost = (req, res) => {
  try {
    const data = req.body.data;

    //a check to validate if data incoming is in array format 
    if (!Array.isArray(data)) {
      return res.status(400).json({ success: false, message: "Invalid input format." });
    }

    //parameters for user_id 
    const fullName = "vriti_jaitley";
    const dob = "31012004";
    const email = "vriti.jaitley@chitkara.edu.in";
    const roll_number = "2210994862"; 

    const numbers = [];
    const alphabets = [];
    const specialChars = [];

    //checking for numbers, alphabets and specialChara according to instructions in the sheet
    data.forEach(item => {
      if (/^[0-9]+$/.test(item)) {
        numbers.push(item);
      } else if (/^[a-zA-Z]$/.test(item)) {
        alphabets.push(item);
      } else {
        specialChars.push(item);
      }
    });

    //creating the response 
    const response = {
      is_success: true,
      user_id:`${fullName.toLowerCase()}_${dob}`,
      email,
      roll_number: roll_number,
      numbers,
      alphabets,
      special_characters: specialChars
    };

    res.status(200).json(response);
  } catch (err) {
    console.error("Error processing /bfhl:", err.message);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};

