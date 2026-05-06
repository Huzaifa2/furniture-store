import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SaleTicker from '../components/SaleTicker';
import { useLanguage } from '../i18n/LanguageContext';

const Login = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate('/'), 900);
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased">
      <SaleTicker />
      <header className="fixed top-9 w-full z-50 border-b border-stone-200/60 bg-stone-50/95 backdrop-blur-sm shadow-[0_4px_20px_-5px_rgba(44,44,44,0.05)]">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <Link to="/" className="text-2xl font-serif font-semibold tracking-tighter text-zinc-900 hover:opacity-70 transition-opacity">LUMIÈRE</Link>
          <div className="hidden md:flex items-center space-x-12 font-serif text-lg tracking-tight">
            <Link className="text-stone-500 hover:text-zinc-800 transition-colors" to="/browse-our-collection">{t('nav.living')}</Link>
            <Link className="text-stone-500 hover:text-zinc-800 transition-colors" to="/wooden-dining-table-details">{t('nav.dining')}</Link>
            <Link className="text-stone-500 hover:text-zinc-800 transition-colors" to="/seller-dashboard">{t('nav.office')}</Link>
            <Link className="text-stone-500 hover:text-zinc-800 transition-colors" to="/timeless-hearth">{t('nav.about')}</Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/your-shopping-cart" aria-label="Cart" className="text-zinc-800 hover:text-primary hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined">shopping_bag</span>
            </Link>
            <Link to="/login" aria-label="Account" className="text-zinc-800 hover:text-primary hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left: editorial image */}
        <aside className="hidden lg:block relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80"
            alt="Lumière atelier"
            className="absolute inset-0 w-full h-full object-cover parallax-slow fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/60 via-zinc-900/30 to-zinc-900/70"></div>
          <div className="absolute inset-0 flex flex-col justify-between p-16 text-white">
            <div className="font-serif text-2xl font-semibold tracking-tighter">LUMIÈRE</div>
            <div className="reveal">
              <span className="font-label-sm uppercase tracking-widest text-xs opacity-70 mb-4 block">Members</span>
              <h2 className="font-display-xl text-display-xl leading-[1.1] mb-6">Welcome back to the atelier.</h2>
              <p className="font-body-lg max-w-md opacity-80">
                Sign in to access your saved pieces, order history, and private showroom invitations.
              </p>
            </div>
            <p className="text-xs opacity-50 uppercase tracking-widest">© 2026 Lumière · Roskilde</p>
          </div>
        </aside>

        {/* Right: form */}
        <section className="flex items-center justify-center px-6 py-24 sm:px-12 lg:px-16 pt-[140px] lg:pt-24">
          <div className="w-full max-w-md">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-3 block">Sign In</span>
            <h1 className="font-display-xl text-display-xl text-primary mb-3">Welcome back.</h1>
            <p className="font-body-md text-on-surface-variant mb-10">
              New to Lumière?{' '}
              <Link to="/signup" className="text-primary font-medium underline underline-offset-4 hover:text-secondary transition-colors">
                Create an account
              </Link>
            </p>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Email address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={onChange('email')}
                  placeholder="you@example.com"
                  className="w-full bg-surface-container-low border border-stone-200 focus:border-primary focus:outline-none rounded-xl p-4 font-body-md transition-colors"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Password</label>
                  <button type="button" className="text-xs text-stone-500 hover:text-primary underline-offset-4 hover:underline transition-colors">
                    Forgot?
                  </button>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={show ? 'text' : 'password'}
                    required
                    value={form.password}
                    onChange={onChange('password')}
                    placeholder="••••••••"
                    className="w-full bg-surface-container-low border border-stone-200 focus:border-primary focus:outline-none rounded-xl p-4 pr-12 font-body-md transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShow((s) => !s)}
                    aria-label={show ? 'Hide password' : 'Show password'}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-stone-400 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">{show ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-3 cursor-pointer group select-none pt-2">
                <input type="checkbox" className="w-4 h-4 accent-zinc-900" defaultChecked />
                <span className="font-body-md text-sm text-on-surface group-hover:text-primary transition-colors">Keep me signed in</span>
              </label>

              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-primary text-on-primary font-label-sm uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-70 disabled:cursor-wait"
              >
                {submitted ? 'Signing you in…' : 'Sign In'}
              </button>
            </form>

            <div className="my-8 flex items-center gap-4 text-stone-300">
              <div className="h-px flex-1 bg-stone-200"></div>
              <span className="text-[10px] uppercase tracking-widest text-stone-400">or continue with</span>
              <div className="h-px flex-1 bg-stone-200"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-stone-300 rounded-xl py-3 px-4 hover:bg-surface-container hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.86-3.08.43-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.42C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                <span className="text-xs font-semibold uppercase tracking-widest">Apple</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-stone-300 rounded-xl py-3 px-4 hover:bg-surface-container hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                <span className="text-xs font-semibold uppercase tracking-widest">Google</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
