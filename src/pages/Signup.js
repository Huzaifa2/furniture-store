import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SaleTicker from '../components/SaleTicker';
import { useLanguage } from '../i18n/LanguageContext';

const passwordStrength = (pw) => {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
};

const Signup = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '', terms: false });
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (k) => (e) => setForm({
    ...form,
    [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
  });

  const strength = useMemo(() => passwordStrength(form.password), [form.password]);
  const strengthLabel = ['Too short', 'Weak', 'Fair', 'Good', 'Strong'][strength];
  const strengthColor = ['bg-red-400', 'bg-orange-400', 'bg-amber-400', 'bg-lime-500', 'bg-emerald-500'][strength];

  const passwordsMatch = form.password && form.confirm && form.password === form.confirm;
  const showMismatch = form.confirm && !passwordsMatch;
  const canSubmit = form.name && form.email && passwordsMatch && form.terms && strength >= 2;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
    setTimeout(() => navigate('/'), 1100);
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
        <aside className="hidden lg:block relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1400&q=80"
            alt="Lumière atelier interior"
            className="absolute inset-0 w-full h-full object-cover parallax-slow fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/60 via-zinc-900/30 to-zinc-900/70"></div>
          <div className="absolute inset-0 flex flex-col justify-between p-16 text-white">
            <div className="font-serif text-2xl font-semibold tracking-tighter">LUMIÈRE</div>
            <div className="reveal">
              <span className="font-label-sm uppercase tracking-widest text-xs opacity-70 mb-4 block">Become a Member</span>
              <h2 className="font-display-xl text-display-xl leading-[1.1] mb-6">Join the atelier.</h2>
              <ul className="space-y-3 max-w-md opacity-85 font-body-md">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-base mt-0.5 opacity-80">check</span>
                  <span>Save pieces and curate private mood boards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-base mt-0.5 opacity-80">check</span>
                  <span>Track your orders and lifetime restoration history</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-base mt-0.5 opacity-80">check</span>
                  <span>First access to new editions and atelier visits</span>
                </li>
              </ul>
            </div>
            <p className="text-xs opacity-50 uppercase tracking-widest">© 2026 Lumière · Roskilde</p>
          </div>
        </aside>

        <section className="flex items-center justify-center px-6 py-24 sm:px-12 lg:px-16 pt-[140px] lg:pt-24">
          <div className="w-full max-w-md">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-3 block">Create Account</span>
            <h1 className="font-display-xl text-display-xl text-primary mb-3">Open your atelier.</h1>
            <p className="font-body-md text-on-surface-variant mb-10">
              Already a member?{' '}
              <Link to="/login" className="text-primary font-medium underline underline-offset-4 hover:text-secondary transition-colors">
                Sign in
              </Link>
            </p>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Full name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={onChange('name')}
                  placeholder="Eleanor Mortensen"
                  className="w-full bg-surface-container-low border border-stone-200 focus:border-primary focus:outline-none rounded-xl p-4 font-body-md transition-colors"
                />
              </div>

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
                <label htmlFor="password" className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={show ? 'text' : 'password'}
                    required
                    minLength={8}
                    value={form.password}
                    onChange={onChange('password')}
                    placeholder="At least 8 characters"
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
                {form.password && (
                  <div className="flex items-center gap-3 pt-1">
                    <div className="flex-1 grid grid-cols-4 gap-1.5">
                      {[0, 1, 2, 3].map((i) => (
                        <span
                          key={i}
                          className={`h-1 rounded-full transition-all duration-300 ${i < strength ? strengthColor : 'bg-stone-200'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-stone-500 uppercase tracking-widest">{strengthLabel}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="confirm" className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Confirm password</label>
                <input
                  id="confirm"
                  type={show ? 'text' : 'password'}
                  required
                  value={form.confirm}
                  onChange={onChange('confirm')}
                  placeholder="Repeat your password"
                  className={`w-full bg-surface-container-low border focus:outline-none rounded-xl p-4 font-body-md transition-colors ${
                    showMismatch ? 'border-red-400 focus:border-red-500' : 'border-stone-200 focus:border-primary'
                  }`}
                />
                {showMismatch && <p className="text-xs text-red-600 mt-1">Passwords don't match.</p>}
              </div>

              <label className="flex items-start gap-3 cursor-pointer group select-none pt-2">
                <input
                  type="checkbox"
                  checked={form.terms}
                  onChange={onChange('terms')}
                  className="w-4 h-4 mt-1 accent-zinc-900"
                />
                <span className="font-body-md text-sm text-on-surface-variant group-hover:text-primary transition-colors">
                  I agree to the{' '}
                  <button type="button" className="text-primary underline underline-offset-4 hover:text-secondary">Terms of Service</button>
                  {' '}and{' '}
                  <button type="button" className="text-primary underline underline-offset-4 hover:text-secondary">Privacy Policy</button>.
                </span>
              </label>

              <button
                type="submit"
                disabled={!canSubmit || submitted}
                className="w-full bg-primary text-on-primary font-label-sm uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none"
              >
                {submitted ? 'Creating your atelier…' : 'Create Account'}
              </button>
            </form>

            <p className="text-xs text-stone-400 text-center mt-8">
              By creating an account, you'll occasionally receive curated emails. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Signup;
