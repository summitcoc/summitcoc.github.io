# Summit Church of Christ Website

This is the website for Summit Church of Christ in Ludington, Michigan. This README will help you update the website content and publish your changes.

## 📝 How to Update Website Content (For Beginners)

### Step 1: Navigate to Your Repository on GitHub
1. Go to [github.com](https://github.com) and sign in
2. Find your repository (it should be named `summitcoc.github.io` or similar)
3. Click on the repository name to open it

### Step 2: Find the Page You Want to Edit
The website has these main pages:
- `index.html` - Home/Welcome page
- `beliefs.html` - What We Believe page
- `elders.html` - About the Elders page
- `bulletin.html` - Weekly Bulletin page
- `contact.html` - Contact information page

### Step 3: Edit a Page
1. **Click on the file name** you want to edit (e.g., `index.html`)
2. **Click the pencil icon** (✏️) in the top right of the file view
3. **Find the text you want to change** in the code
   - Look for text between `<p>` and `</p>` tags (paragraphs)
   - Look for text between `<h1>` and `</h1>` tags (main headings)
   - Look for text between `<h2>` and `</h2>` tags (section headings)
   - Look for text between `<li>` and `</li>` tags (list items)
4. **Make your changes** - only edit the text content, not the HTML tags
5. **Preview your changes** by clicking the "Preview" tab if available

### Step 4: Save Your Changes
1. **Click commit change**
2. **Add a commit message** in the "Commit changes" box
   - Example: "Updated Sunday service times on home page"
   - Example: "Added new elder information"
   - Example: "Updated this week's bulletin"
3. **Keep "Commit directly to the main branch" selected**
4. **Click "Commit changes"** (green button)

### Step 5: Your Changes Are Live!
- Your changes will automatically appear on the live website within a few minutes
- The website address is typically: `https://[your-username].github.io` or your custom domain

## 🎯 Common Text Updates

### Updating Service Times or Announcements
- **File to edit:** `index.html`
- **Look for:** Text in paragraph tags like `<p>Sunday Services at 10:00 AM</p>`
- **Change:** Only the text between the tags

### Updating Beliefs or Doctrine
- **File to edit:** `beliefs.html`
- **Look for:** Text in paragraph and heading tags
- **Change:** The content while keeping the HTML structure

### Updating Elder Information
- **File to edit:** `elders.html`
- **Look for:** Names, descriptions, and contact information
- **Change:** The text content only

### Updating Weekly Bulletin
- **File to edit:** `bulletin.html`
- **Look for:** Announcements, events, and weekly information
- **Change:** Replace old information with new content

### Updating Contact Information
- **File to edit:** `contact.html`
- **Look for:** Address, phone numbers, email addresses
- **Change:** The contact details as needed

## ⚠️ Important Tips

### DO:
- ✅ Only change the text content between HTML tags
- ✅ Write clear commit messages describing what you changed
- ✅ Check your spelling before committing
- ✅ Make small changes one at a time

### DON'T:
- ❌ Delete or modify HTML tags (like `<p>`, `</p>`, `<h1>`, etc.)
- ❌ Change anything in the `<head>` section
- ❌ Modify the navigation menu unless you know what you're doing
- ❌ Edit CSS files unless you have web development experience

## 🆘 If Something Goes Wrong

If you accidentally break something:
1. **Don't panic!** GitHub keeps a history of all changes
2. **Go to the repository main page**
3. **Click "Commits"** (usually near the top)
4. **Find your recent change** and click on it
5. **Click "Revert"** to undo the change
6. **Or contact someone with technical experience** to help fix it

## 📱 The Website Structure

```
summitcoc.github.io/
├── index.html          (Home page)
├── beliefs.html        (What We Believe)
├── elders.html         (About the Elders)
├── bulletin.html       (Weekly Bulletin)
├── contact.html        (Contact Information)
├── css/
│   └── styles.css      (Website styling - advanced users only)
├── js/
│   └── main.js         (Website functionality - advanced users only)
└── README.md           (This file)
```

## 🔧 For Advanced Users

If you're comfortable with web development:
- The site uses semantic HTML5
- Styling is handled in `css/styles.css`
- JavaScript functionality is in `js/main.js`
- The site is responsive and mobile-friendly

## 📞 Need Help?

If you need assistance with updates or have questions about the website, contact someone in the church with technical experience or refer to GitHub's help documentation.

---

**Remember:** Keep it simple! You're just changing text content. The website will handle the rest automatically.
