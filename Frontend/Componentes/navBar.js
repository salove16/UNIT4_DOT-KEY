function navBar() {
  return `<div id="leftNav">
  <button id="showmenuBtn"><i class="fa-solid fa-bars-staggered" id="click-func-menu" onclick="changeVisiblity()"></i></button>
    <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_200x_2x_e02a6cf9-c48a-4414-a48f-75fe2e8b2a29_260x.jpg?v=1641192340" alt="">
  </div>
  <div id="rightNav">
   
    <div id="search">
    <i class="fa-solid fa-magnifying-glass" id="searchIcon"></i>
    <input id="searchProd" placeholder="Search" type="text">
  </div>
    <i id="cartBag" class="fa-solid fa-bag-shopping"></i>
    <i id="user" onclick="gotoLogIn()" class="fa-solid fa-user"></i>
    <span id="Sign_Out">  </span>

  </div>`;
}

function navInt() {
  return `<div id="nav">
  <img src="" alt="" srcset="" id="nav_text" >
</div> `;
}

function navcar(i) {
  let navimg = [
    {
      images:
        "data:image/png;base64,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",
    },
    {
      images:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAAAXCAYAAACLQpr1AAAEUklEQVR4Xu1ZMU4tMQwMF0BcgCNQ0gEXoKPkBtDRQg2io4MbUNJxATgCokaIComKC/yvedKgwdhJdnn79n/JWz29ZBN7PGM72bWdnZ0/JZ9EIBFYOQJrKb6VY54bJgILBFJ8SYREYCYEUnwzAZ/bJgIpvuRAIjATAim+mYDPbROBFF9yIBGYCYHB4js/Py97e3s/zH16eirHx8eF4w8PD+Xs7Kzq1u3tbdnc3Cxvb2/l8PDwa+7j42P4XmtdvuvN435YnPZyI/VLx05OTsrBwcGP+ZGBnK/jp6enRX1qYQgsjo6Ofmzx+flZ9vf3Q2yur6/L1tbW17g3n3tb/4nNzc1NwW/7RDbd3d2Vq6urb9N3d3fLxcXFt/+8eV6c1S5dR99XWxTb+/v7sr6+XvUfgxHvMBb5aWMYcdTOqwlgNvFZJ9XoMeJTYcFhKz5LTJ3DICPA7+/vC+KThAgonhrpCbC3B8eUPFOIzxIvEr/urRiNFR/2UcF6yYe2WMHX4oyY4OF6mkhoK+33xI53veRT411NfNbPWcUXVaDeykeiouqh+tnAKBC2MnrZBEHa3t4uLy8vi8ps7SNYCBSDxeAwICAR9kLWxvt4sFZUDdQOJYDOV7KTUC2MaE+P30pQ/OYe+O1leCt82torPrWJMdTEwiSg+CvhFRuNCbH0Ohdd8/n5eZEcPTFavICFFUmLdx72Xrfg2V6rct7Y6Mr3G/FZ8keODCUhHPSI7a3DgKLi4oHgtPLhN9rNXgHUBGWJvWzx1YRjsVUisUVFPHrFZ0mk+NTi5fnsxd1bQ8UL0aG1bInYI3sP74aKT/fxCkhNkKPFZxclGC1ieQLxMujQykd7xogPJLBnPqwHcsIvPX9pZVEMIh8wx45FbScxjM4dUcLTRGIzvR1TfD4+Pr4SDOxEBzL0zIf3WPlq52NvzBOfFQgx1pbeOxe2zsO9vIuwx/ue4P878UXnE1tlVlX5LGG5L4K8sbGxwBf/we7X19fFxZJ9xlS+KIENFd+Yykch23NqS3y1SjdV5SNOUYfU2wL28G7ohUuUjGsVj2OjK9/YtrOWWWCUXrwsS3xYlwHSNjPKliQzzwzMtLwF1JtZAhmda1Zx5vP2gF21M5/GT0n5G/Epzss887XEV7u99OLjCYO8s5wjNtFl0T8pPusgjWemteK1N1isNmj5es9dXmvhtS38z0sgbI84poKrVT6sOfS2M0pgY5LO0NvOHnFoDGtJU9daxm1nlBRbdwOeqCiOXt5Z7KPPHdFtp/dJJaqCk1W+SHxagdQB70p5DAl72j/Y5h2OvfOGvcZuZboh3/mWKT5P/LXvfNGnmFbls3Fd9ne+2nfcVntpBQH/Ly8vF11PL+9qFy7amc0ivp5eNuckAolAG4HBla+9ZM5IBBKBHgRSfD0o5ZxEYAIEUnwTgJpLJgI9CKT4elDKOYnABAik+CYANZdMBHoQSPH1oJRzEoEJEPgLkwadeDwVsfYAAAAASUVORK5CYII=",
    },
    {
      images:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAAVCAYAAABv/vNqAAAEv0lEQVR4Xu1aMU5jQQwdLsANKDgAN4BcgI6SG0BHG2po08EJoKRDoqACbpAjpEVC4gK7cqQXvRh7xvP5yyrEqdg/88f2s5/t8d+dw8PDPyV/iUAi8KsR2Emi/2r/pnGJwBKBJHoGQiKwBQgk0bfAyWliIpBEzxhIBLYAgST6Fjg5TUwEQkR/fX39gtTDw0OZzWar59hzdHS0tvfi4qKcnJysPcO7p6en5ezsrCwWiyJ/y+/q6qpMJpPl37e3t+X+/n7t3Zubm3JwcFA+Pz/L8fHxak327e3tlfl8Xs7Pz5fPLdnT6bSwPZYOYsP19fWaDNYLQrUOVjg9Pj6W3d3dtSWtAy/WMGHb5B3YbOGkdcG5Hq7YH/UJ8Hh5eSmXl5drfrNw0HGh98AnOI/XLexl3cIRvuP3OVYZB60TYgs4e3K1H7Qt/J5nN8cm72H95FzNs9a6hb08G0x0eZmdYhEdwGnhHtHZiBoZQB59jsgBaJ5sDd53iA67akE8JtE15lGi60RdSwwaD88nYxKdiWElT49w7G8vscNHTE4dP9gDnIBPL9E1CbV+HC9SSHT8WEmK47W17pG8m+gIaIscmuheBZEzsJfPEXBhfKtC6WyIgAfxGRA+y8q0vUTn5KblWkCLrdyx1Jwha62KKntgU5TokvQ+Pj7K/v7+suuJEr3mE010tiuqF94B8QQn0U9XMUsW3uGCgGfsIysOcR77Bfs40dRs9PwoOtzd3S07VY/oOvmDV5CHpIQ41x2Gt/5fiB4BiYNaHKyrbU1xBJM4Rlpjq/232kAdhD9BdNgRafVbrbtcWxBAvYSK7I/6ZCyiczC/vb19ucqJrV5ltQhtJVWtKxcCJAp0gHxmz5VBx6p3lYUcSaI6GXh6wqbW+mhE1wfVWncYpLMzn6FbHYuYnvK6jeHMXpOt13qJbunjte5eq4X9IB63cDWiCz7v7+/LmYc4X35coXVg6srdQ3To5PlkLKJrnaxKXWvd4Xdd/dhP1hrkwj4Qk+NobKIjHlCRa10w6w+iW1cD2RfpGAff0VvDuJ6Kzka1Bh2815PRE4QAn8EacxjH+uq74RCiy+BLzx+8O+UYRBf9LZ/0YBxN1rzPqqy1Z1aCxHmWriC/dFnPz8+r5ImhMHcSPQUIMq2KHpk1WAPk1oA5wpkuoteGTtE7ulXRhWR8H4wC6wWbNx+w7uhWG2fd4VjW09PTap5Q61h0gEfu9K2KLkSXH9/zWjMN6NFT0Vs+GYPotcBv3ZUt+dbkvva1ARji+qdxjBQrL4kNJXqtMGhZ3lDR0umfEV2E6Yql28HahDdCoJojolP3mp6sg5bFmdf7QuDpUEuYUaJHP5ex03uJLjJYTg2PXjmcrDTBotNvOYPftaoh9Kp1JbKnZ9ofmbV4d3TGydqjOeN9Uq3Z9eNE5/bHasusoGZntcjeyriR7+i62uHfkckvDwT5m753pjxvfU+OEl3O4sGO/v8GlrOHEF3OsXzy3YpuTbmhc/R79pDv6BoXkM2KNa/j+CmiW/ZxIqh9gtZ2hiq6FTT5LBFIBDYHgST65vgqNU0EBiOQRB8MXb6YCGwOAkn0zfFVapoIDEYgiT4YunwxEdgcBJLom+Or1DQRGIzAX9gIaR/Q1KSUAAAAAElFTkSuQmCC",
    },
  ];

  setInterval(function () {
    if (i == navimg.length) {
      i = 0;
    }
    let nav_text = document.querySelector("#nav_text");
    nav_text.src = navimg[i].images;
    i++;
  }, 3000);
}

export { navBar, navInt, navcar };