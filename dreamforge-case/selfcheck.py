import re, io, sys
path = sys.argv[1]
t = io.open(path, encoding='utf-8').read()
print('words', len(t.split()),
      'tables', len(re.findall(r'^\|[ :|-]+\|\s*$', t, re.M)),
      'dashes', len(re.findall('[\u2014\u2013]', t)),
      'excl', t.count('!'),
      'ph', len(re.findall(r'<[a-z][^>]{0,20}>', t)),
      'rs', len(re.findall(r'\bRs\.? ?\d', t)))
