# 🧪 Testing Guide

## Quick Start Testing

### 1. **Start the Development Server**
```bash
npx expo start
```

### 2. **Test Authentication Flow**

#### **Login Testing:**
- **Demo Credentials**: `user@example.com` / `password`
- **Invalid Credentials**: Try wrong email/password to test error handling
- **Validation**: Try empty fields, invalid email format, short passwords

#### **Signup Testing:**
- Fill all required fields (Name, Email, Password, Confirm Password)
- Test password mismatch validation
- Test email format validation
- Test minimum password length (6 characters)

#### **Forgot Password Testing:**
- Enter email address
- Verify alert shows success message
- Test with empty email field

### 3. **Navigation Testing**

#### **After Login:**
- Should navigate to main app dashboard
- Test drawer navigation (hamburger menu)
- Test tab navigation at bottom
- Test back navigation

#### **Skip Authentication:**
- Click "Skip" button on any auth screen
- Should go directly to main app

### 4. **Main App Features**

#### **Dashboard:**
- View welcome card and stats
- Test quick action buttons
- Test document upload functionality

#### **Drawer Navigation:**
- Books library
- AI Chat
- Study rooms
- Leaderboard
- Solana features
- Settings

#### **Tab Navigation:**
- Library (document management)
- Chat (AI conversations)
- Collab (study rooms)
- Achievements
- Settings

## Expected Behavior

### ✅ **What Should Work:**
- Smooth navigation between screens
- Proper authentication state management
- Form validation with clear error messages
- Loading states during authentication
- Responsive design on different screen sizes
- Consistent styling across all screens

### ❌ **Known Limitations:**
- Demo authentication (not connected to real backend)
- Some Solana features require wallet connection
- TypeScript warnings (non-blocking, app still works)

## Troubleshooting

### **If App Won't Start:**
```bash
# Clear cache and restart
npx expo start --clear
```

### **If Authentication Doesn't Work:**
- Check console for errors
- Verify you're using correct demo credentials
- Try clearing app data/cache

### **If Navigation Is Broken:**
- Check if all screens are properly defined in layouts
- Verify expo-router is properly configured

## Testing Checklist

### **Authentication (Priority: High)**
- [ ] Login with demo credentials works
- [ ] Login with wrong credentials shows error
- [ ] Signup form validation works
- [ ] Forgot password flow works
- [ ] Skip authentication works
- [ ] Navigation after auth works

### **Main App (Priority: Medium)**
- [ ] Dashboard loads properly
- [ ] Drawer navigation works
- [ ] Tab navigation works
- [ ] Document upload works
- [ ] Chat interface loads
- [ ] Settings screen accessible

### **UI/UX (Priority: Low)**
- [ ] Consistent styling
- [ ] Smooth animations
- [ ] Proper loading states
- [ ] Error messages clear
- [ ] Responsive on different sizes

## Performance Testing

### **Load Time:**
- App should start within 3-5 seconds
- Navigation should be instant
- Authentication should complete within 2 seconds

### **Memory Usage:**
- Monitor for memory leaks during navigation
- Check if app remains responsive after extended use

## Platform-Specific Testing

### **iOS:**
- Test on iOS Simulator
- Verify keyboard behavior
- Check safe area handling

### **Android:**
- Test on Android Emulator
- Verify back button behavior
- Check hardware back button

### **Web (if applicable):**
- Test in browser
- Verify responsive design
- Check for web-specific issues

---

## 🎯 **Priority Testing Order:**

1. **Authentication Flow** (Critical)
2. **Basic Navigation** (Critical)
3. **Main Dashboard** (High)
4. **Individual Features** (Medium)
5. **UI Polish** (Low)

## 📞 **Support:**

If you encounter any issues during testing:
1. Check the console for error messages
2. Refer to `AUTH_FIXES_SUMMARY.md` for known issues
3. Try clearing cache and restarting
4. Verify all dependencies are installed correctly

---

**Happy Testing! 🚀**