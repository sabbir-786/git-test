
# Basic Git Configuration

## Set Your Identity
Every commit is associated with a name and email address.

Configure these using:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

- Replace `"Your Name"` with your full name.
- Replace `your.email@example.com` with the email linked to your Git account.

---

## 1. View All Configuration Settings
To list all the settings currently configured for Git:

```bash
git config --list
```

This shows all the configurations from system, global, and local levels. Duplicate entries might appear if the same setting is configured at multiple levels.

---

## 2. Check Specific Levels of Configuration
Git configurations are stored at three levels: **system**, **global**, and **local**. You can check settings for each level individually:

### System-level Configuration
Applies to all users on the system:

```bash
git config --system --list
```
> (Requires administrator/root privileges.)

### Global-level Configuration
Applies to the current user:

```bash
git config --global --list
```

### Local-level Configuration
Applies only to the current repository:

```bash
git config --local --list
```

---

## 3. Check a Specific Configuration
To check the value of a specific Git configuration:

### Check your username:
```bash
git config user.name
```

### Check your email:
```bash
git config user.email
```
