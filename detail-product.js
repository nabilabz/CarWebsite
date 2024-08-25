$(document).ready(function () {

    var $slides = $('.carousel-image');

    function updateDetail(slideIndex) {
        var carsDetail = [
            // 1
            {
                name: "Stargazer",
                price: "Starting From Rp 400.000.000",
                features: [
                    "Panoramic Sunroof",
                    "8-inch Touchscreen Display",
                    "Sensing Safety Suite",
                    "Magic Seat with Multiple Configurations",
                    "Smart Entry with Walk Away Auto Lock"
                  
                ],
                image: "../assets/AllCars/Stargazer.png"
            },
        
             // 2
             {
                name: "Stargazer X",
                price: "Starting From Rp 420.000.000",
                features: [
                    "i-Activsense Safety Technology",
                    "Nappa Leather-trimmed Seats",
                    "Power Liftgate",
                    "Adaptive Front-Lighting System",
                    "Smart Entry with Walk Away Auto Lock"
                  
                ],
                image: "../assets/AllCars/Stargazer X.png"
            },
        
                 // 3
                 {
                    name: "Creta",
                    price: "Starting From Rp 297.000.000",
                    features: [
                        "ProPILOT Assist",
                        "Intelligent Around View Monitor",
                        "Zero Gravity Front Seats",
                        "Tri-Zone Automatic Climate Control"
                      
                    ],
                    image: "../assets/AllCars/creta-672.png"
                },
        
             // 4
             {
                name: "Santa Fe",
                price: "Starting From Rp 780.000.000",
                features: [
                    "H-Trac All-Wheel Drive",
                    "Blind-Spot Collision-Avoidance Assist",
                    "12.3-inch Digital Instrument Cluster",
                    "Surround View Monitor",
                    "Heated and Ventilated Front Seats"
                  
                ],
                image: "../assets/AllCars/new-santa-fe672.png"
            },   
            
            // 5
            {
                name: "Palisade",
                price: "Starting From Rp 904.000.000",
                features: [
                    "12.3-inch Touchscreen Display",
                    "Ultrasonic Rear Occupant Alert",
                    "Nappa Leather Seating Surfaces",
                    "Blind-View Monitor",
                    "Wireless Device Charging"
                  
                ],
                image: "../assets/AllCars/Palisade.png"
            },  
        
            // 6
            {
                name: "Ioniq 6",
                price: "Starting From Rp 1.197.000.000",
                features: [
                    "Long Range Battery with Over 300 Miles of Range",
                    "Augmented Reality Head-Up Display",
                    "Biometric Start Technology",
                    "Dual Motor All-Wheel Drive",
                    "Sustainable Interior Materials"
                  
                ],
                image: "../assets/AllCars/Ioniq 6.png"
            }];
        
            var $productName = $('#product-name');
            var $productPrice = $('#product-price');
            var $productFeatures = $('#product-features');
            var $productImage = $('#product-image');
        
        
            $productName.text(carsDetail[slideIndex].name);
            $productPrice.text(carsDetail[slideIndex].price);
            $productFeatures.empty(); 
            $.each(carsDetail[slideIndex].features, function(index, feature) {
                $productFeatures.append('<li>' + feature + '</li>'); 
            });
            $productImage.attr('src', carsDetail[slideIndex].image); 
        };
        
            $slides.each(function(index) {
                $(this).on('click', function() {
                    updateDetail(index);
                });
            });
        
            updateDetail(0);
});
