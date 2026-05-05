import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WoodenDiningTableDetails = () => {
  const [selectedMaterial, setSelectedMaterial] = useState('natural-oak');
  const [selectedDimension, setSelectedDimension] = useState('standard');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`Added ${quantity} Artisan Solid Oak Dining Table (${selectedMaterial}) to cart!`);
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 border-b border-stone-200/60 bg-stone-50/95 backdrop-blur-sm shadow-[0_4px_20px_-5px_rgba(44,44,44,0.05)]">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <Link to="/" className="text-2xl font-serif font-semibold tracking-tighter text-zinc-900">LUMIÈRE</Link>
          <div className="hidden md:flex items-center space-x-12 font-serif text-lg tracking-tight">
            <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/browse-our-collection">Living</Link>
            <Link className="text-zinc-900 border-b-2 border-zinc-900 pb-1 hover:opacity-80 transition-opacity duration-300" to="/wooden-dining-table-details">Dining</Link>
            <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/seller-dashboard">Office</Link>
            <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/timeless-hearth">About</Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/your-shopping-cart" className="hover:opacity-80 transition-opacity duration-300">
              <span className="material-symbols-outlined text-zinc-800">shopping_bag</span>
            </Link>
            <Link to="/checkout-shipping" className="hover:opacity-80 transition-opacity duration-300">
              <span className="material-symbols-outlined text-zinc-800">person</span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-32 max-w-7xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Images Section */}
          <section className="lg:col-span-7 space-y-6">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-xl shadow-sm">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcjGOSg11_DwOSDpbGAUUiSOCKuT2o6IRgptnW3TSsqqkfVai7o6OhbfH2TyIit029j65tLFraZmzI_mdbNFMCzci36S_io2PXUQOExwmsBgBrEGekurCg9UF_9mikg9GdXOziJb8pIOxeXHsh1M4uxSqBy_PtPN73l0AhB0kG66PQYOwLBuCOpPjK5gq5eUC5Dyiapgz6DUORRRSsHR1v-9K3s7U_WNr_cErwO2ijJlOmLWBlt5sHZH6mHSrOZVbER7Q4fREG74YV"
                alt="Artisan Solid Oak Dining Table"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="aspect-square bg-surface-container rounded-lg overflow-hidden border border-stone-200 cursor-pointer hover:shadow-md transition-shadow">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp_1_Ef4TbYWk1QoyNEFmIRtAoHe0YZbIfHd1d4nz-kElaoKNJ2vnRlJK_8ZvMU9Wvnc4T7y3yRFKhIA9PUPM0Ujr09F7SpqSl6fY3hMO4nC2WRVenG3UjkdivOx8bCmdmL9ekmRIsrdaTRkskgA44Jd9aqNG4KpaavKS3-u9RD022aD6N00AEiqGzYE_kSZI3XRvWePhn0x-kgvdpo_j5ePCS8Kx6JS8XqHfUs8PL5Bv5fvZQxFLjH5yY99P0KS048_6QgnD6kakt" alt="Wood grain detail" />
              </div>
              <div className="aspect-square bg-surface-container rounded-lg overflow-hidden border border-stone-200 cursor-pointer hover:shadow-md transition-shadow">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Li55fktOkfygxIsaFA6O8RNEEs4cV-dDuqNuOWjvatqn7aW5K6ymLG0ocwb3l50NVJoRdr_-Cu3gB4GwpRdqdNdW28ZVlwItrOuO5GTy4SkmZAlfwyRrp5YkUPWkccB0DPGOkev3C8Ll9brQPs_fIbkgYsMDNRZzcLrwsd8AE5FsDIalj9b7hD0FLI744kTSAyNi1oMEaC3bctlaZSv4ISebfnRj9Z8H7aWL1P87AzUaQJUOUqsazqzrPOURfz-eFtqkjmaqWNW8" alt="Joinery detail" />
              </div>
              <div className="aspect-square bg-surface-container rounded-lg overflow-hidden border border-stone-200 cursor-pointer hover:shadow-md transition-shadow">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8-GPNgeYbbpmRsGpZfufXcI1VuBo3e9nJGNIx5YKTI20n7IVLGcN0fYB45C87mnKQd6HjOojvAUJ68Hnzyw74NuESOUZm8sZPEdooqQh0VII4jMQhvP_m2z11TZ9WCCnmbcsf0Z_Rq6r_lDi8jzeOv1doar-vNpAzUVpEWXnjC82qLp8RzrMdS9vHH01-fx--2KC8nnjJQJ2G9iFtkHJsbS_IXfkZ2sm6_6GhcwWP34Y3HfYOHXZiTEKaE4AIa0MHMFYBVHv0ZJse" alt="Table setting" />
              </div>
              <div className="aspect-square bg-surface-container rounded-lg overflow-hidden border border-stone-200 cursor-pointer hover:shadow-md transition-shadow relative">
                <img className="w-full h-full object-cover opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWkurWjDIeCQedr7WNKc6Hri_yFRmM_HR-ty72MsqDZzxOe9MXzf_nXy9dRS5vrDZ8rkAsrastJEmdzSBj3S-i805RShabZPytlOLgwCsmPB51JmYoiz6B5qFegnd_ROD5PeM7pT_juZDF6hMrwb5JALAXcrkofmE5adw1KLqmf8Tqgn89sbuWYI-u4y5i59t6oXk0c5Wz0bxagEGkhSNT5GmD3ypIOvnPKe5BCQF-x6MtqBtYoyGQi6B9GrZ3MWCTd5XnZnboyrrs" alt="More photos" />
                <div className="absolute inset-0 flex items-center justify-center text-label-sm font-label-sm">+4 More</div>
              </div>
            </div>
          </section>

          {/* Product Details Section */}
          <section className="lg:col-span-5 flex flex-col justify-start">
            <div className="sticky top-32">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2 block">The Heritage Collection</span>
              <h1 className="font-display-xl text-display-xl text-primary mb-4">Artisan Solid Oak Dining Table</h1>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="font-headline-md text-headline-md text-primary">$2,450.00</span>
                <div className="flex items-center text-on-secondary-fixed-variant">
                  {[1, 2, 3, 4].map((i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  ))}
                  <span className="material-symbols-outlined text-sm">star_half</span>
                  <span className="ml-2 font-label-sm text-label-sm">(48 Reviews)</span>
                </div>
              </div>

              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
                A celebration of raw nature and refined design. Each table is individually crafted from sustainably sourced European Oak, preserving the natural edge and unique character of the wood for a piece that lives and breathes with your home.
              </p>

              <div className="space-y-8 mb-12">
                {/* Material Selection */}
                <div>
                  <span className="font-label-sm text-label-sm uppercase mb-4 block">Select Material</span>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setSelectedMaterial('natural-oak')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all ${
                        selectedMaterial === 'natural-oak' 
                          ? 'border-primary bg-surface-container' 
                          : 'border-stone-200 bg-surface-container-low'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-[#D2B48C]"></div>
                      <span className="font-label-sm text-label-sm">Natural Oak</span>
                    </button>
                    <button 
                      onClick={() => setSelectedMaterial('dark-walnut')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all ${
                        selectedMaterial === 'dark-walnut' 
                          ? 'border-primary bg-surface-container' 
                          : 'border-stone-200 bg-surface-container-low'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-[#4B3621]"></div>
                      <span className="font-label-sm text-label-sm">Dark Walnut</span>
                    </button>
                  </div>
                </div>

                {/* Dimensions Selection */}
                <div>
                  <span className="font-label-sm text-label-sm uppercase mb-4 block">Dimensions</span>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setSelectedDimension('standard')}
                      className={`p-4 rounded-xl border transition-all ${
                        selectedDimension === 'standard'
                          ? 'bg-surface-container border-primary'
                          : 'bg-surface-container-low border-stone-200'
                      }`}
                    >
                      <span className="block font-label-sm text-stone-500 mb-1">Standard</span>
                      <span className="font-body-md">220 x 100 cm</span>
                    </button>
                    <button
                      onClick={() => setSelectedDimension('grand')}
                      className={`p-4 rounded-xl border transition-all ${
                        selectedDimension === 'grand'
                          ? 'bg-surface-container border-primary'
                          : 'bg-surface-container-low border-stone-200 opacity-60'
                      }`}
                    >
                      <span className="block font-label-sm text-stone-500 mb-1">Grand</span>
                      <span className="font-body-md">280 x 110 cm</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center border border-stone-200 rounded-xl px-4 py-3 bg-white">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:opacity-50">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="mx-6 font-body-md font-semibold w-4 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="hover:opacity-50">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary text-white font-label-sm py-4 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  ADD TO CART
                </button>
              </div>

              <button className="w-full border border-stone-300 font-label-sm py-4 rounded-xl hover:bg-stone-50 transition-all mb-12">
                BUY IT NOW
              </button>

              {/* Shipping Info */}
              <div className="border-t border-stone-200 pt-8 space-y-4">
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-lg">local_shipping</span>
                  <span className="font-body-md">Free white-glove delivery within 4-6 weeks</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-lg">verified</span>
                  <span className="font-body-md">10-year structural warranty</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Specifications Section */}
        <section className="mt-section-gap">
          <div className="border-b border-stone-200 flex gap-12 mb-12">
            <button className="pb-4 border-b-2 border-primary font-label-sm text-label-sm">SPECIFICATIONS</button>
            <button className="pb-4 border-b-2 border-transparent font-label-sm text-label-sm text-stone-400 hover:text-stone-600">REVIEWS (48)</button>
            <button className="pb-4 border-b-2 border-transparent font-label-sm text-label-sm text-stone-400 hover:text-stone-600">CARE GUIDE</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="font-headline-md text-headline-md">The Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-500 font-label-sm">MATERIAL</span>
                  <span className="font-body-md">Solid European Oak, Steel supports</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-500 font-label-sm">FINISH</span>
                  <span className="font-body-md">Matte UV-Hardened Oil</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-500 font-label-sm">SEATING</span>
                  <span className="font-body-md">8 - 10 Persons</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-500 font-label-sm">WEIGHT</span>
                  <span className="font-body-md">112 kg</span>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 p-8 rounded-2xl flex flex-col justify-center">
              <p className="font-headline-md italic text-stone-600 mb-4">"The craftsmanship is unparalleled. It truly is the heart of our dining room now."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-stone-200"></div>
                <div>
                  <span className="block font-label-sm font-bold">Eleanor M.</span>
                  <span className="text-xs text-stone-400">Verified Purchase, London</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete the Look Section */}
        <section className="mt-section-gap mb-20">
          <h2 className="font-display-xl text-headline-lg mb-12 text-center">Complete the look</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {[
              { title: 'Woven Nordic Chair', price: '$480.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDXmu1xj-jQagCsSTiNHa4bfQw_DabP52GITPRmYC5p8T_zj9Md-fpqy5pM0upK_uGN38g0ryetMd9vjTNqA410bp2pHka7aCiAHtv3UHX9KUboBali6iNn0O8W-weReQabaaGQLxKgDOWcc-prVm9AKr3BCoQrBk6VVQd3_wcD-o7I7ff5MSy5zxrZdeb5um5DvAzFc51FnubMm7xg3UN5iedTW21Dc7kp4m-8ySLFjt2uUny3GarHY8WvaASVR0bs7tgdDE33_Ra' },
              { title: 'Eclipse Pendant Light', price: '$320.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNdWi9wRjv4IeBpMB9wCjZxYb6ixNYkJQdCeoQQycKViI4z2c63HfXwtnjCLwneIxyNd4ZCL03CVfl40kE04KGKhotpGKJMcP0F0yrTSYoBGzwk6IdKnXfpQtWA2hhSJakNy-T5AqnqNDF97gNZ3dEj97Js25pgnYFtxf8hgWlESdGLQgBXASfkpdvJ2LjnmWYiQUu1qQLe03kBk9kjBuqDluFZ8H7aWL1P87AzUaQJUOUqsazqzrPOURfz-eFtqkjmaqWNW8' },
              { title: 'Tidal Ceramic Vase', price: '$125.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvE8O0fSyHWEwuNplPLSX8r6FOEbWtBZbTBL3aot6s6vm4uG_np6c8VsW21JfTJCjVY2q1S8wSGXXfvIEy_iOvBzNKBE8yJmyHo1mhC8nuoLdhpjS0tvXUX92hNoIgS8EwWziyxYrD8RjMesGFjqHzXhH_vxS3KdsJfFRFciFC41i5bVMNkA4ftV1zYNU-OdAsBh9JDQnYBQRSWKDdFQvGHtH8xWeOTpnayywZEv2V12Szks7gtYfzHY4ECpQTiCVZ_6VGHBUImKCv' },
              { title: 'Desert Loom Rug', price: '$890.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsjrEla1Aai4J_ZbOPX2ftpEx_hdCA4OJDqbv0eARuismoOfn0flEC2Mw6CQfg6oHjm6VDAEmExR11BGWNk31e3KSeTCTCnkSgAi1-8gaWa2vK5OD8G_qPadbosrp8ZwbaYCBCggiSlj_ioyrMLIsQXMcE9YOef6JA_E4EW7Dkm_Wn6G398hnDOM_aOfzLOgkZoAxuNFiRir4_0A2TL3Ld4ZgczDTaX4uRRvLaDcQMlyzG2Q_3YS0yP8a5Z2F0RM7dDgLgfrCvIKnL' }
            ].map((product, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-surface-container rounded-xl overflow-hidden mb-4 relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={product.img} alt={product.title} />
                  <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <h3 className="font-body-md font-semibold">{product.title}</h3>
                <p className="font-label-sm text-stone-500">{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-stone-200 mt-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-serif text-lg text-zinc-800">LUMIÈRE</div>
          <div className="flex gap-8">
            <a className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors" href="#">Sustainability</a>
            <a className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors" href="#">Material Care</a>
            <a className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors" href="#">Shipping & Returns</a>
            <a className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
          </div>
          <p className="font-sans text-xs tracking-wide text-stone-500">© 2024 Lumière Furniture. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WoodenDiningTableDetails;
