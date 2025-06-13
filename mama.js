const pensées = [
  { texte: "La vie est un cadeau, ne la gaspille pas. 🎁", 
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=400&h=300", 
    couleur: "#f9c74f" },

  { texte: "Petit à petit, l'oiseau fait son nid. 🐦",
     image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=400&h=300",
    couleur: "#90be6d" },

  { texte: "On récolte ce que l'on sème. 🌱", 
    image: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&w=400&h=300", 
    couleur: "#f94144" },

  { texte: "N’aie pas peur d’échouer ; aie peur de ne pas essayer. 💪", 
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&h=300", 
    couleur: "#43aa8b" },

  { texte: "Le succès vient à ceux qui osent. 🚀", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&h=300", 
    couleur: "#f3722c" },

  { texte: "Chaque jour est une nouvelle opportunité. 🌞", 
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&h=300", 
    couleur: "#577590" },

  { texte: "Apprends du passé, vis dans le présent, rêve du futur. ⏳", 
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&h=300",
     couleur: "#277da1" },

  { texte: "La persévérance est la clé du succès. 🔑", 
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&h=300", 
    couleur: "#f8961e" },

  { texte: "Il n’y a pas de raccourci vers n’importe où qui en vaille la peine. 🛤️", 
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&h=300", 
    couleur: "#9c89b8" },

  { texte: "Le bonheur n’est pas quelque chose de prêt à l’emploi. 😊", 
    image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=400&h=300", 
    couleur: "#e07a5f" },

  { texte: "Chaque matin est un nouveau départ. 🌅", 
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=300", 
    couleur: "#6a994e" },

  { texte: "La gratitude transforme ce que nous avons en suffisance. 🙏", 
    image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&h=300", 
    couleur : "#f4a261" },

  { texte: "Le changement est la seule constante dans la vie. 🔄", 
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&h=300", 
    couleur: "#2a9d8f" },

  { texte: "Crois en toi et tout devient possible. ✨", 
    image: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&h=300", 
    couleur: "#264653" },

  { texte: "Le succès est un voyage, pas une destination. 🛤️", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&h=300", 
    couleur: "#e76f51" },

  { texte: "Il faut toujours viser la lune, car même en cas d’échec, on atterrit dans les étoiles. 🌙⭐", 
    
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&h=300", couleur: "#d62828" },
  { texte: "Le plus grand risque est de ne prendre aucun risque. ⚠️", image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=400&h=300", couleur: "#f4a261" },

  { texte: "Chaque jour apporte une nouvelle chance. 🍀", 
    image: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&h=300", 
    couleur: "#2a9d8f" },

  { texte: "Le savoir est une arme, mais la sagesse est un bouclier. 🧠🛡️", 
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=400&h=300", 
    couleur: "#264653" },

  { texte: "Sois le changement que tu veux voir dans le monde. 🌍", 
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&h=300", 
    couleur: "#9c89b8" }
];

    let index = 0;

    function showNextThought() {
      const p = pensées[index];
      document.getElementById("thought").textContent = p.texte;
      document.getElementById("thought-image").src = p.image;
      document.body.style.backgroundColor = p.couleur;
      index = (index + 1) % pensées.length;;
    }


 

      /*let decreBtn = document.getElementById("decreBtn");
      let increBtn = document.getElementById("increBtn");
      let compteur= document.getElementById("compteur");
      let reset = document.getElementById("reset");


      let count = 0;
      compteur.textContent = count;

      function increCompteur() {
        compteur.textContent = ++count;
        if(count > 0){
          compteur.style.color = "grenn";
        }
      }


      
      function decreCompteur() {
        compteur.textContent = --count;
        if(count < 0){
          compteur.style.color = "red";
        }
      }

      function resetCompteur(){
        count = 0
        compteur.textContent = count ;
        compteur.style.color = "black";
      }

      decreBtn.addEventListener("click", decreCompteur);
      increBtn.addEventListener("click", increCompteur);
      reset.addEventListener("click", resetCompteur);



      
const btnColor = document.getElementById("btncolor");

btnColor.addEventListener("click", () => {

  const colors = [
    "#f1c40f",
    "#1abc9c", 
    "#e74c3c", 
    "#9b59b6", 
    "#2ecc71",
    "#34495e",
    "#e67e22", 
    "#ff6b81", 
    "#8e44ad", 
    "#fdcb6e", 
    "#00cec9", 
    "#d63031", 
    "#0984e3", 
    "#55efc4", 
    "#fab1a0", 
    "#636e72", 
    "#ffeaa7", 
    "#6c5ce7", 
    "#b2bec3"  
  ];


  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  
  document.body.style.backgroundColor = randomColor;
});*/

  
