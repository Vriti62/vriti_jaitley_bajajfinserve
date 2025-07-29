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

    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];

    let sum = 0;
    let concat_string = "";

    data.forEach(item => {
      if (/^[0-9]+$/.test(item)) {
        const num = parseInt(item);
        sum += num;
        if (num % 2 === 0) {
          even_numbers.push(item);
        } else {
          odd_numbers.push(item);
        }
      } else if (/^[a-zA-Z]$/.test(item)) {
        alphabets.push(item);
        concat_string += item;
      } else {
        special_characters.push(item);
      }
    });

    const response = {
      is_success: true,
      user_id: `${fullName.toLowerCase()}_${dob}`,
      email,
      roll_number,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(), 
      concat_string,
    };

    res.status(200).json(response);
  } catch (err) {
    console.error("Error processing /bfhl:", err.message);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};
