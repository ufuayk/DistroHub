const distributions = [
    { name: "Ubuntu", version: "22.04 LTS (Jammy Jellyfish) x86_64", icon: "https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png", downloadLink: "https://releases.ubuntu.com/jammy/ubuntu-22.04.4-desktop-amd64.iso", description: "User-friendly and popular Linux distribution." },
    { name: "Fedora", version: "Workstation 40 x86_64", icon: "https://upload.wikimedia.org/wikipedia/commons/4/41/Fedora_icon_%282021%29.svg", downloadLink: "https://download.fedoraproject.org/pub/fedora/linux/releases/40/Workstation/x86_64/iso/Fedora-Workstation-Live-x86_64-40-1.14.iso", description: "Cutting-edge distribution with the latest technology." },
    { name: "Debian", version: "Netinst 12.6 x86_64", icon: "https://www.debian.org/logos/openlogo-nd.svg", downloadLink: "https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-12.6.0-amd64-netinst.iso", description: "Known for its stability and security." },
    { name: "Arch Linux", version: "2024.08.01 x86_64", icon: "https://upload.wikimedia.org/wikipedia/commons/1/13/Arch_Linux_%22Crystal%22_icon.svg", downloadLink: "https://mirror.archlinux.no/iso/2024.08.01/archlinux-2024.08.01-x86_64.iso", description: "Minimalist and highly customizable distribution." },
    { name: "Linux Mint", version: "22 (Wilma) x86_64", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Linux_Mint_logo_without_wordmark.svg", downloadLink: "https://mirrors.layeronline.com/linuxmint/stable/22/linuxmint-22-cinnamon-64bit.iso", description: "Ubuntu-based, user-friendly distribution." },
    { name: "Manjaro", version: "24.0.6 x86_64", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Manjaro-logo.svg", downloadLink: "https://download.manjaro.org/gnome/24.0.6/manjaro-gnome-24.0.6-240812-linux69.iso", description: "User-friendly Arch Linux-based distribution." },
    { name: "EndeavourOS", version: "2024.06.25 x86_64", icon: "https://endeavouros.com/wp-content/uploads/2019/08/EndeavourOS-logo.png", downloadLink: "https://mirror.alpix.eu/endeavouros/iso/EndeavourOS_Endeavour-2024.06.25.iso", description: "Flexible, user-friendly Arch-based distribution." },
    { name: "Pop!_OS", version: "22.04 LTS x86_64", icon: "https://pop.system76.com/icon-512.png", downloadLink: "https://iso.pop-os.org/22.04/amd64/intel/43/pop-os_22.04_amd64_intel_43.iso", description: "Powerful Linux for productivity and gaming." },
    { name: "Zorin OS", version: "17.1 Core x86_64", icon: "https://upload.wikimedia.org/wikipedia/commons/7/70/Zorin_OS.svg", downloadLink: "https://zorin.mirrors.itworxx.de/17/Zorin-OS-17.1-Core-64-bit-r2.iso", description: "Easy transition from Windows to Linux." },
    { name: "Rocky Linux", version: "DVD 9.4 x86_64", icon: "https://upload.wikimedia.org/wikipedia/commons/7/77/Rocky_Linux_logo.svg", downloadLink: "https://download.rockylinux.org/pub/rocky/9/isos/x86_64/Rocky-9.4-x86_64-dvd.iso", description: "Enterprise-ready, RHEL-compatible Linux distribution." },
    { name: "openSUSE", version: "Netinst Leap 15.6 x86_64", icon: "https://en.opensuse.org/images/4/44/Button-filled-colour.png", downloadLink: "https://download.opensuse.org/distribution/leap/15.6/iso/openSUSE-Leap-15.6-NET-x86_64-Media.iso", description: "Versatile Linux with robust community support." },
    { name: "Elementary OS", version: "7.1 x86_64", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Elementary_logo.svg/1200px-Elementary_logo.svg.png", downloadLink: "https://sgp1.dl.elementary.io/download/MTcyNDMyNDU1Ng==/elementaryos-7.1-stable.20230926rc.iso", description: "Beautiful and user-friendly, macOS-like interface." },
    { name: "Garuda Linux", version: "240428 x86_64", icon: "https://upload.wikimedia.org/wikipedia/commons/8/88/Garuda-blue-sgs.svg", downloadLink: "https://iso.builds.garudalinux.org/iso/latest/garuda/gnome/latest.iso?r2=1", description: "High-performance Arch-based with custom tweaks." },
    { name: "Kali Linux", version: "2024.2 x86_64", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg", downloadLink: "https://cdimage.kali.org/kali-2024.2/kali-linux-2024.2-installer-amd64.iso", description: "Powerful toolkit for ethical hacking and security." },
    { name: "Pardus", version: "23.2 x86_64", icon: "https://www.pardus.org.tr/wp-content/uploads/2019/08/Pardus-04.png", downloadLink: "https://indir.pardus.org.tr/ISO/Pardus23/Pardus-23.2-GNOME-amd64.iso", description: "Turkish-based, user-friendly Linux with local support." },
    { name: "CachyOS", version: "240818 x86_64", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/CachyOS_Logo.svg", downloadLink: "https://iso.cachyos.org/desktop/240818/cachyos-desktop-linux-240818.iso", description: "Arch-based, optimized for performance and security." },
    { name: "Kubuntu", version: "24.04 LTS x86_64", icon: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Kubuntu_logo.svg", downloadLink: "https://cdimage.ubuntu.com/kubuntu/releases/24.04/release/kubuntu-24.04-desktop-amd64.iso", description: "Ubuntu with KDE Plasma desktop environment." },
    { name: "KDE Neon", version: "20240228 x86_64", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Neon-logo.svg", downloadLink: "https://files.kde.org/neon/images/user/20240822-0718/neon-user-20240822-0718.iso", description: "Latest KDE features on a stable Ubuntu base." },
    { name: "Slackware", version: "15.0 x86_64", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Slackware_logo.svg/2048px-Slackware_logo.svg.png", downloadLink: "https://mirrors.slackware.com/slackware/slackware-iso/slackware64-15.0-iso/slackware64-15.0-install-dvd.iso", description: "One of the oldest and most stable Linux distributions." },
    { name: "Puppy Linux", version: "BookwormPup 10.0.7 x86_64", icon: "https://jonpatterns.github.io/linuxfiles/puppy/img/woof.png", downloadLink: "https://rockedge.org/kernels/data/ISO/Bookworm_Pup64/BookwormPup64_10.0.7.iso", description: "Lightweight and highly portable Linux distribution." },
    { name: "NixOS", version: "24.05 x86_64", icon: "https://avatars.githubusercontent.com/u/487568?s=280&v=4", downloadLink: "https://channels.nixos.org/nixos-24.05/latest-nixos-gnome-x86_64-linux.iso", description: "Configurable Linux distro. with Nix package manager." },
    { name: "Qubes OS", version: "4.2.2 x86_64", icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/Qubes_OS_Logo.svg", downloadLink: "https://mirrors.edge.kernel.org/qubes/iso/Qubes-R4.2.2-x86_64.iso", description: "Security through isolation using Xen virtualization." },
    { name: "Vanilla OS", version: "2.0 x86_64", icon: "https://vanillaos.org/assets/images/brand/vanillaos-logo-icon.svg", downloadLink: "https://download.vanillaos.org/latest.zip", description: "Minimalist Linux with a focus on simplicity." },
    { name: "Alpine Linux", version: "3.20.2 x86_64", icon: "https://avatars.githubusercontent.com/u/7600810?s=200&v=4", downloadLink: "https://dl-cdn.alpinelinux.org/alpine/v3.20/releases/x86_64/alpine-standard-3.20.2-x86_64.iso", description: "Lightweight and security-oriented Linux distribution." },
    { name: "Oracle Linux", version: "9.4 x86_64", icon: "https://blog.gleb.ca/wp-content/uploads/2022/10/Penguin-GdOipk.png", downloadLink: "https://yum.oracle.com/ISOS/OracleLinux/OL9/u4/x86_64/OracleLinux-R9-U4-x86_64-boot.iso", description: "Enterprise Linux optimized for Oracle." },
    { name: "SDesk", version: "2024.06.24 x86_64", icon: "https://i0.wp.com/stevestudios.net/wp-content/uploads/2024/02/squid-2.png?w=256&ssl=1", downloadLink: "https://stevestudios.net/wp-content/uploads/2024/06/sdesk-2024.06.24-x86_64.iso", description: "A minimalist distribution." },
    { name: "Solus", version: "4.5 x86_64", icon: "https://getsol.us/imgs/solus.png", downloadLink: "https://downloads.getsol.us/isos/4.5/Solus-4.5-Budgie.iso", description: "A distribution that includes the Budgie desktop." }
    // As long as the project is not abandoned, existing versions of distributions will continue to be updated. And of course new distributions will continue to be added. :-)
];

const distroList = document.getElementById('distroList');

distributions.forEach((distro, index) => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
        <div class="card h-100">
            <img src="${distro.icon}" class="card-img-top" alt="${distro.name} logo">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title"><strong>${distro.name}</strong></h5>
                <p class="card-text distro-version"><strong><i class="fas fa-code-fork"></i> Version:</strong> ${distro.version}</p>
                <p class="card-text flex-grow-1">${distro.description}</p>
                <a href="${distro.downloadLink}" class="btn btn-download mt-auto">
                    <i class="fas fa-download me-2"></i>Download
                </a>
            </div>
        </div>
    `;
    distroList.appendChild(card);

    gsap.from(card, {
        duration: 0.8,
        opacity: 0,
        y: 50,
        delay: index * 0.05,
        ease: "power3.out"
    });
});

particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#8CFFFA" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#8CFFFA", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
    },
    retina_detect: true
});
