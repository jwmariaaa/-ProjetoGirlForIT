function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isOpen = sidebar.style.right === '0px';
    sidebar.style.right = isOpen ? '-250px' : '0px';
}

function login() {
    const nameInput = document.getElementById('name');
    const photoInput = document.getElementById('photo');
    const profilePic = document.getElementById('profilePic');
    const sidebarProfilePic = document.getElementById('sidebarProfilePic');
    const profileName = document.getElementById('profileName');

    const name = nameInput.value;
    const photoFile = photoInput.files[0];

    if (name) {
        localStorage.setItem('name', name);
        profileName.textContent = name;
    }

    if (photoFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const photoURL = event.target.result;
            localStorage.setItem('photo', photoURL);
            profilePic.src = photoURL;
            sidebarProfilePic.src = photoURL;
        }
        reader.readAsDataURL(photoFile);
    }
}

function logout() {
    localStorage.removeItem('name');
    localStorage.removeItem('photo');
    document.getElementById('profileName').textContent = 'Usuário';
    document.getElementById('profilePic').src = 'https://via.placeholder.com/50';
    document.getElementById('sidebarProfilePic').src = 'https://via.placeholder.com/100';
}

function loadProfile() {
    const name = localStorage.getItem('name');
    const photo = localStorage.getItem('photo');

    if (name) {
        document.getElementById('profileName').textContent = name;
    }

    if (photo) {
        document.getElementById('profilePic').src = photo;
        document.getElementById('sidebarProfilePic').src = photo;
    }
}


document.addEventListener('DOMContentLoaded', loadProfile);


document.getElementById('sidebarProfilePic').addEventListener('click', function() {
    document.getElementById('photo').click();
});
